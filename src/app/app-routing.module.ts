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
    data: { pageTitle: 'Files' },
    component: StubComponent
  },
  {
    path: 'photos',
    loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule)
  },
  {
    path: 'sharing',
    data: { pageTitle: 'Sharing' },
    component: StubComponent
  },
  {
    path: 'links',
    data: { pageTitle: 'Links' },
    component: StubComponent
  },
  {
    path: 'events',
    data: { pageTitle: 'Events' },
    component: StubComponent
  },
  {
    path: 'get-started',
    data: { pageTitle: 'Get started' },
    component: StubComponent
  },
  {
    path: '**',
    data: { pageTitle: 'Page not found' },
    component: StubComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
