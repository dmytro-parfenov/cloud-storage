import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {SidenavProjectionService} from '../../../core/sidenav/sidenav-projection.service';
import {UpgradeAccountComponent} from '../../../shared/upgrade-account/upgrade-account.component';

@Component({
  selector: 'cs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  constructor(private readonly sidenavProjectionService: SidenavProjectionService) { }

  ngOnInit(): void {
    this.sidenavProjectionService.attach<UpgradeAccountComponent, null>(UpgradeAccountComponent);
  }

}
