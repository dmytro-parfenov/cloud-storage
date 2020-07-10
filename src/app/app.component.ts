import {Component} from '@angular/core';
import {SidenavVisibilityService} from './core/sidenav/sidenav-visibility.service';

@Component({
  selector: 'cs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly sidenavVisible$ = this.sidenavVisibilityService.visible$;

  constructor(private readonly sidenavVisibilityService: SidenavVisibilityService) {
  }

  closeSideNav(): void {
    this.sidenavVisibilityService.close();
  }

  openSideNav(): void {
    this.sidenavVisibilityService.open();
  }
}
