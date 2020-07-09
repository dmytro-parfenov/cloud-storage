import {Component} from '@angular/core';
import {SidenavVisibilityService} from './core/sidenav-visibility.service';

@Component({
  selector: 'cs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly sidenavVisible$ = this.sidenavVisibilityService.visible$;

  constructor(private readonly sidenavVisibilityService: SidenavVisibilityService) {
  }

  toggleSideNav(): void {
    this.sidenavVisibilityService.toggle();
  }

  closeSideNav(): void {
    this.sidenavVisibilityService.close();
  }
}
