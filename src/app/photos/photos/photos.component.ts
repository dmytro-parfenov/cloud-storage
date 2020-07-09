import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
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

@Component({
  selector: 'cs-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent implements OnInit {

  pageTitle = '';

  readonly photos$ = new BehaviorSubject<Photo[]>([]);

  readonly sortParams$ = new BehaviorSubject<SortParams>(new SortParams());

  readonly filteredPhotos$: Observable<Photo[]> = combineLatest([this.photos$, this.sortParams$]).pipe(
    map(([photos, sortParams]) => new PhotosSorter(photos).apply(sortParams))
  );

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly changeDetectorRef: ChangeDetectorRef,
              private readonly queryParamsService: QueryParamsService,
              @Inject(PHOTOS_PROVIDER) private readonly photosProviderService: PhotosProvider) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => this.onRouterDataChange(data as PhotosResolvedData));

    this.photosProviderService.get().subscribe(photos => this.photos$.next(photos));
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
    this.pageTitle = data.title;
    this.sortParams$.next(data.sortParams);

    this.changeDetectorRef.markForCheck();
  }

}
