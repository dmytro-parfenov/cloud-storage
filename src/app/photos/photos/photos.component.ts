import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PhotosResolvedData} from './photos-resolved-data';
import {QueryParamsService} from '../../core/query-params.service';
import {PHOTOS_PROVIDER} from '../shared/photos-provider.key';
import {PhotosProvider} from '../shared/photos-provider';
import {Photo} from '../shared/photo';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'cs-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent implements OnInit {

  pageTitle = '';

  photos: Photo[] = [];

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly changeDetectorRef: ChangeDetectorRef,
              private readonly queryParamsService: QueryParamsService,
              @Inject(PHOTOS_PROVIDER) private readonly photosProviderService: PhotosProvider) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => this.onRouterDataChange(data as PhotosResolvedData));

    this.photosProviderService.get().pipe(
      tap(photos => {
        this.photos = photos;
        this.changeDetectorRef.markForCheck();
      })
    ).subscribe();
  }

  /**
   * Track function for the *ngFor to track only changed items
   */
  trackFn(index: number): number {
    return index;
  }

  private onRouterDataChange(data: PhotosResolvedData): void {
    this.pageTitle = data.title;

    this.changeDetectorRef.markForCheck();
  }

}
