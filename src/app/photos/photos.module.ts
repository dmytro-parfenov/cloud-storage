import {NgModule} from '@angular/core';

import {PhotosRoutingModule} from './photos-routing.module';
import {PhotosComponent} from './photos/photos.component';
import {PHOTOS_PROVIDER} from './shared/photos-provider.key';
import {LocalPhotosProviderService} from './shared/photos-provider/local-photos-provider.service';
import {SharedModule} from '../shared/shared.module';
import {SortParamsResolverService} from './resolver/sort-params-resolver.service';
import { PhotoComponent } from './photos/photo/photo.component';
import { ActionsComponent } from './photos/actions/actions.component';
import { SortingComponent } from './photos/sorting/sorting.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [PhotosComponent, PhotoComponent, ActionsComponent, SortingComponent],
  imports: [
    PhotosRoutingModule,
    SharedModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [
    {provide: PHOTOS_PROVIDER, useClass: LocalPhotosProviderService},
    SortParamsResolverService
  ]
})
export class PhotosModule { }
