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
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ReactiveFormsModule} from '@angular/forms';
import { SortingOrderComponent } from './photos/sorting/sorting-order/sorting-order.component';


@NgModule({
  declarations: [PhotosComponent, PhotoComponent, ActionsComponent, SortingComponent, SortingOrderComponent],
  imports: [
    PhotosRoutingModule,
    SharedModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonToggleModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: PHOTOS_PROVIDER, useClass: LocalPhotosProviderService},
    SortParamsResolverService
  ]
})
export class PhotosModule { }
