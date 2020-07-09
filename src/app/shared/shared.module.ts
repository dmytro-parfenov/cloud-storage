import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MeasurementUnitPipe} from './pipe/measurement-unit/measurement-unit.pipe';


@NgModule({
  declarations: [MeasurementUnitPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    MeasurementUnitPipe
  ]
})
export class SharedModule { }
