import {Pipe, PipeTransform} from '@angular/core';
import {MeasurementUnit} from './measurement-unit';

/**
 * The pipe that converts value from one measurement unit to another
 */
@Pipe({
  name: 'measurementUnit'
})
export class MeasurementUnitPipe implements PipeTransform {

  transform(value: number, from: MeasurementUnit, to: MeasurementUnit): number {
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
    switch (measurementUnit) {
      case 'Mb':
        return value * 1000;
    }

    return value;
  }

  /**
   * Converts and returns value to provided measurement unit
   *
   * @param value current value
   * @param sizeUnit measurement unit to convert in
   */
  private toSizeUnit(value: number, sizeUnit: MeasurementUnit): number {
    switch (sizeUnit) {
      case 'Mb':
        return value / 1000;
    }

    return value;
  }

}
