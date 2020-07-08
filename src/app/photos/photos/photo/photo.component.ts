import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cs-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent implements OnInit {

  @Input() url = '';
  @Input() name = '';
  @Input() size = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
