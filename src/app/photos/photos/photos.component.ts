import {ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit} from '@angular/core';
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
import {StorageComponent} from '../../shared/storage/storage.component';
import {StorageData} from '../../shared/storage/storage-data';
import {SidenavProjectionItem} from '../../core/sidenav/sidenav-projection-item';

@Component({
  selector: 'cs-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent implements OnInit, OnDestroy {

  readonly photos$ = new BehaviorSubject<Photo[]>([]);

  readonly sortParams$ = new BehaviorSubject<SortParams>(new SortParams());

  readonly filteredPhotos$: Observable<Photo[]> = combineLatest([this.photos$, this.sortParams$]).pipe(
    map(([photos, sortParams]) => new PhotosSorter(photos).apply(sortParams))
  );

  private storageComponentItem: SidenavProjectionItem<StorageComponent> | null = null;

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly queryParamsService: QueryParamsService,
              private readonly sidenavProjectionService: SidenavProjectionService,
              @Inject(PHOTOS_PROVIDER) private readonly photosProviderService: PhotosProvider) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => this.onRouterDataChange(data as PhotosResolvedData));

    this.photosProviderService.get().subscribe(photos => {
      this.photos$.next(photos);

      const photosTotalSize = photos.reduce<number>((previousValue, currentValue) =>
        previousValue + currentValue.size, 0);

      this.removeStorageComponent();

      this.storageComponentItem = this.sidenavProjectionService.attach<StorageComponent, StorageData>(StorageComponent, {
        used: photosTotalSize,
        total: photosTotalSize * 2
      });
    });
  }

  ngOnDestroy(): void {
    this.removeStorageComponent();
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

  private removeStorageComponent(): void {
    if (!this.storageComponentItem) {
      return;
    }

    this.storageComponentItem.portal.detach();
  }

}
