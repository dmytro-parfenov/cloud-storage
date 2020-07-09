import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SidenavVisibilityService} from '../../core/sidenav/sidenav-visibility.service';

@Component({
  selector: 'cs-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  constructor(private readonly sidenavVisibilityService: SidenavVisibilityService) { }

  ngOnInit(): void {
  }

  closeSideNav(): void {
    this.sidenavVisibilityService.close();
  }

}
