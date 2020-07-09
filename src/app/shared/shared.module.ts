import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MeasurementUnitPipe} from './pipe/measurement-unit/measurement-unit.pipe';
import { StorageComponent } from './storage/storage.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UpgradeAccountComponent } from './upgrade-account/upgrade-account.component';


@NgModule({
  declarations: [MeasurementUnitPipe, StorageComponent, UpgradeAccountComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    MeasurementUnitPipe,
    StorageComponent,
    UpgradeAccountComponent
  ]
})
export class SharedModule { }
