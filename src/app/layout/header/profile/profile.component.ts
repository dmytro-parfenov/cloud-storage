import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {SidenavProjectionService} from '../../../core/sidenav/sidenav-projection.service';
import {TemplatePortal} from '@angular/cdk/portal';
import {SidenavAttachment} from '../../../core/sidenav/sidenav-attachment';

@Component({
  selector: 'cs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  /**
   * Reads the template and attaches it by using the {@link SidenavProjectionService}
   */
  @ViewChild('upgradeAccountPortalTemplate', {read: TemplateRef, static: true})
  set upgradeAccountPortalTemplate(upgradeAccountPortalTemplate: TemplateRef<any>) {
    const portal = new TemplatePortal(upgradeAccountPortalTemplate, this.viewContainerRef);
    this.sidenavProjectionService.attach(new SidenavAttachment(portal, 1));
  }

  constructor(private readonly sidenavProjectionService: SidenavProjectionService,
              private readonly viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

}
