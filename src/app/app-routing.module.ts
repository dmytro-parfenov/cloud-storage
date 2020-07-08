import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StubComponent} from './layout/stub/stub.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'photos'
  },
  {
    path: 'files',
    data: { title: 'Files' },
    component: StubComponent
  },
  {
    path: 'photos',
    data: { title: 'Photos' },
    loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule)
  },
  {
    path: 'sharing',
    data: { title: 'Sharing' },
    component: StubComponent
  },
  {
    path: 'links',
    data: { title: 'Links' },
    component: StubComponent
  },
  {
    path: 'events',
    data: { title: 'Events' },
    component: StubComponent
  },
  {
    path: 'get-started',
    data: { title: 'Get started' },
    component: StubComponent
  },
  {
    path: '**',
    data: { title: 'Page not found' },
    component: StubComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
