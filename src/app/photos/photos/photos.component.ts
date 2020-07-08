import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PhotosResolvedData} from './photos-resolved-data';
import {QueryParamsService} from '../../core/query-params.service';

@Component({
  selector: 'cs-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent implements OnInit {

  pageTitle = '';

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly changeDetectorRef: ChangeDetectorRef,
              private readonly queryParamsService: QueryParamsService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => this.onRouterDataChange(data as PhotosResolvedData));
  }

  private onRouterDataChange(data: PhotosResolvedData): void {
    this.pageTitle = data.title;

    this.changeDetectorRef.markForCheck();
  }

}
