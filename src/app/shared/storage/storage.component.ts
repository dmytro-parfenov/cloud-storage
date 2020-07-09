import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MeasurementUnit} from '../pipe/measurement-unit/measurement-unit';

@Component({
  selector: 'cs-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorageComponent implements OnInit {

  /**
   * Used storage size in kilobytes
   */
  @Input() used = 0;

  /**
   * Total storage size in kilobytes
   */
  @Input() total = 0;

  /**
   * Measurement unit for appearing. Default is 'Gb'.
   */
  @Input() measurementUnit: MeasurementUnit = 'Gb';

  get usedInPercent(): number {
    return ((this.used < this.total) && !!this.total) ? this.used / this.total * 100 : 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
