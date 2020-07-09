import {MeasurementUnit} from '../pipe/measurement-unit/measurement-unit';

export interface StorageData {
  /**
   * Used storage size in kilobytes
   */
  used: number;
  /**
   * Total storage size in kilobytes
   */
  total: number;
  /**
   * Measurement unit for appearing. Default is 'Gb'.
   */
  measurementUnit?: MeasurementUnit;
}
