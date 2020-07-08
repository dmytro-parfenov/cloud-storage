import {NgModule} from '@angular/core';

import {PhotosRoutingModule} from './photos-routing.module';
import {PhotosComponent} from './photos/photos.component';
import {PHOTOS_PROVIDER} from './shared/photos-provider.key';
import {LocalPhotosProviderService} from './shared/photos-provider/local-photos-provider.service';
import {SharedModule} from '../shared/shared.module';
import {SortParamsResolverService} from './resolver/sort-params-resolver.service';
import { PhotoComponent } from './photos/photo/photo.component';


@NgModule({
  declarations: [PhotosComponent, PhotoComponent],
  imports: [
    PhotosRoutingModule,
    SharedModule
  ],
  providers: [
    {provide: PHOTOS_PROVIDER, useClass: LocalPhotosProviderService},
    SortParamsResolverService
  ]
})
export class PhotosModule { }
