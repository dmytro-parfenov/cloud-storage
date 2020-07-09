import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MeasurementUnitPipe} from './pipe/measurement-unit/measurement-unit.pipe';
import { StorageComponent } from './storage/storage.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [MeasurementUnitPipe, StorageComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    MeasurementUnitPipe,
    StorageComponent
  ]
})
export class SharedModule { }
