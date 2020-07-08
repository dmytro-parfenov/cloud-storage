import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'cs-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent implements OnInit {

  readonly pageTitle: string;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.pageTitle = (activatedRoute.snapshot.data.title as string) || '';
  }

  ngOnInit(): void {
  }

}
