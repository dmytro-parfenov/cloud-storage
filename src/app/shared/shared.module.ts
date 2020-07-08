import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageHeaderComponent} from './page-header/page-header.component';


@NgModule({
  declarations: [PageHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    PageHeaderComponent
  ]
})
export class SharedModule { }
