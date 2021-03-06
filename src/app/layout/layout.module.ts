import {NgModule} from '@angular/core';
import {StubComponent} from './stub/stub.component';
import {SharedModule} from '../shared/shared.module';
import {HeaderComponent} from './header/header.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {SearchComponent} from './header/search/search.component';
import {ProfileComponent} from './header/profile/profile.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {SidenavItemComponent} from './sidenav/sidenav-item/sidenav-item.component';
import {MatBadgeModule} from '@angular/material/badge';
import {RouterModule} from '@angular/router';
import {PageHeaderComponent} from './page-header/page-header.component';
import { SidenavProjectionContentComponent } from './sidenav-projection-content/sidenav-projection-content.component';
import {PortalModule} from '@angular/cdk/portal';


@NgModule({
  declarations: [
    StubComponent,
    HeaderComponent,
    SearchComponent,
    ProfileComponent,
    SidenavComponent,
    SidenavItemComponent,
    PageHeaderComponent,
    SidenavProjectionContentComponent
  ],
  exports: [StubComponent, HeaderComponent, SidenavComponent, PageHeaderComponent],
  imports: [
    SharedModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    RouterModule,
    PortalModule
  ]
})
export class LayoutModule { }
