import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MeasurementUnit} from '../pipe/measurement-unit/measurement-unit';
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
  @Input() used: number | null = 0;

  /**
   * @see StorageData.total
   */
  @Input() total: number | null = 0;

  /**
   * @see StorageData.measurementUnit
   */
  @Input() measurementUnit: MeasurementUnit = 'Gb';

  get usedInPercent(): number {
    return (((this.used || 0) < (this.total || 0)) && !!this.total) ? (this.used || 0) / this.total * 100 : 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
