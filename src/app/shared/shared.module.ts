import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageHeaderComponent} from './page-header/page-header.component';
import { MeasurementUnitPipe } from './pipe/measurement-unit/measurement-unit.pipe';


@NgModule({
  declarations: [PageHeaderComponent, MeasurementUnitPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    PageHeaderComponent,
    MeasurementUnitPipe
  ]
})
export class SharedModule { }
