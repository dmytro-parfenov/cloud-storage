import {Pipe, PipeTransform} from '@angular/core';
import {MeasurementUnit} from './measurement-unit';

/**
 * The pipe that converts value from one measurement unit to another
 */
@Pipe({
  name: 'measurementUnit'
})
export class MeasurementUnitPipe implements PipeTransform {

  transform(value: number | null, from: MeasurementUnit, to: MeasurementUnit): number {
    value = value ? value : 0;

    const kbValue = this.fromValue(value, from);

    return this.toSizeUnit(kbValue, to);
  }

  /**
   * Converts and returns value in kilobytes
   *
   * @param value current value
   * @param measurementUnit measurement unit of the current value
   */
  private fromValue(value: number, measurementUnit: MeasurementUnit): number {
    return value * this.resolveDifference(measurementUnit);
  }

  /**
   * Converts and returns value to provided measurement unit
   *
   * @param value current value in kilobytes
   * @param measurementUnit measurement unit to convert in
   */
  private toSizeUnit(value: number, measurementUnit: MeasurementUnit): number {
    return value / this.resolveDifference(measurementUnit);
  }

  /**
   * Resolve and return difference between kilobytes and current measurement unit
   */
  private resolveDifference(sizeUnit: MeasurementUnit): number {
    switch (sizeUnit) {
      case 'Mb':
        return 1000;
      case 'Gb':
        return  1000000;
    }

    return 1;
  }

}
