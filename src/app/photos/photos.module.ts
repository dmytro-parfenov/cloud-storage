import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos/photos.component';
import {PHOTOS_PROVIDER} from './shared/photos-provider.key';
import {LocalPhotosProviderService} from './shared/photos-provider/local-photos-provider.service';


@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ],
  providers: [
    {provide: PHOTOS_PROVIDER, useClass: LocalPhotosProviderService}
  ]
})
export class PhotosModule { }
