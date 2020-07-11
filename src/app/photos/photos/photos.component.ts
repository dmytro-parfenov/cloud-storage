import {ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PhotosResolvedData} from './photos-resolved-data';
import {QueryParamsService} from '../../core/query-params.service';
import {PHOTOS_PROVIDER} from '../shared/photos-provider.key';
import {PhotosProvider} from '../shared/photos-provider';
import {Photo} from '../shared/photo';
import {map} from 'rxjs/operators';
import {SortParams} from './shared/sort/sort-params';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {PhotosSorter} from './photos-sorter';
import {SidenavProjectionService} from '../../core/sidenav/sidenav-projection.service';
import {TemplatePortal} from '@angular/cdk/portal';
import {SidenavAttachment} from '../../core/sidenav/sidenav-attachment';
import {PageHeaderService} from '../../core/page-header.service';

@Component({
  selector: 'cs-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent implements OnInit, OnDestroy {

  /**
   * Reads the template and attaches it by using the {@link SidenavProjectionService}
   */
  @ViewChild('storagePortalTemplate', {read: TemplateRef, static: true})
  set storagePortalTemplate(storagePortalTemplate: TemplateRef<any>) {
    const portal = new TemplatePortal(storagePortalTemplate, this.viewContainerRef);
    this.storageAttachment = new SidenavAttachment(portal, 0);

    this.sidenavProjectionService.attach(this.storageAttachment);
  }

  readonly photos$ = new BehaviorSubject<Photo[]>([]);

  readonly sortParams$ = new BehaviorSubject<SortParams>(new SortParams());

  readonly filteredPhotos$: Observable<Photo[]> = combineLatest([this.photos$, this.sortParams$]).pipe(
    map(([photos, sortParams]) => new PhotosSorter(photos).apply(sortParams))
  );

  readonly usedStorageSize$: Observable<number> = this.photos$.pipe(
    map(photos => photos.reduce<number>((previousValue, currentValue) =>
      previousValue + currentValue.size, 0))
  );

  readonly totalStorageSize$: Observable<number> = this.usedStorageSize$.pipe(
    map(size => size * 2)
  );

  /**
   * Attachment that is attached by using the {@link SidenavProjectionService}
   */
  private storageAttachment: SidenavAttachment | null = null;

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly queryParamsService: QueryParamsService,
              private readonly sidenavProjectionService: SidenavProjectionService,
              private readonly viewContainerRef: ViewContainerRef,
              private readonly pageHeaderService: PageHeaderService,
              @Inject(PHOTOS_PROVIDER) private readonly photosProviderService: PhotosProvider) {}

  ngOnInit(): void {
    this.pageHeaderService.add('Photos');

    this.activatedRoute.data.subscribe(data => this.onRouterDataChange(data as PhotosResolvedData));

    this.photosProviderService.get().subscribe(photos => this.photos$.next(photos));
  }

  ngOnDestroy(): void {
    this.pageHeaderService.remove('Photos');

    this.sidenavProjectionService.detach(attachment => attachment.id === this.storageAttachment?.id);
  }

  onSortParamsUpdate(sortParams: SortParams): void {
    this.queryParamsService.update(sortParams, {queryParamsHandling: 'merge'});
  }

  /**
   * Track function for the *ngFor to track only changes in order
   */
  trackFn(index: number): number {
    return index;
  }

  private onRouterDataChange(data: PhotosResolvedData): void {
    this.sortParams$.next(data.sortParams);
  }

}
