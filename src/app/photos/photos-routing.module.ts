import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotosComponent} from './photos/photos.component';
import {SortParamsResolverService} from './resolver/sort-params-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
    data: { title: 'Photos'},
    resolve: {
      sortParams: SortParamsResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
