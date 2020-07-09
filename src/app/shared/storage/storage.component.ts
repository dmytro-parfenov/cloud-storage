import {ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional} from '@angular/core';
import {MeasurementUnit} from '../pipe/measurement-unit/measurement-unit';
import {SIDENAV_PROJECTION_ITEM_DATA} from '../../core/sidenav/sidenav-projection-idem-data.key';
import {StorageData} from './storage-data';

@Component({
  selector: 'cs-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorageComponent implements OnInit {

  /**
   * @see StorageData.used
   */
  @Input() used = 0;

  /**
   * @see StorageData.total
   */
  @Input() total = 0;

  /**
   * @see StorageData.measurementUnit
   */
  @Input() measurementUnit: MeasurementUnit = 'Gb';

  get usedInPercent(): number {
    return ((this.used < this.total) && !!this.total) ? this.used / this.total * 100 : 0;
  }

  constructor(@Optional() @Inject(SIDENAV_PROJECTION_ITEM_DATA) private readonly data: StorageData) { }

  ngOnInit(): void {
    if (!this.data) {
      return;
    }

    this.used = this.data.used;
    this.total = this.data.total;
  }

}
