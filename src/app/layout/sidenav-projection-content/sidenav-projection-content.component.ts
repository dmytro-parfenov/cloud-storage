import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SidenavProjectionService} from '../../core/sidenav/sidenav-projection.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'cs-sidenav-projection-content',
  templateUrl: './sidenav-projection-content.component.html',
  styleUrls: ['./sidenav-projection-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavProjectionContentComponent {

  readonly attachments$ = this.sidenavProjectionService.attachments$.asObservable().pipe(
    map(attachments => attachments.sort((a, b) => a.order - b.order))
  );

  constructor(private readonly sidenavProjectionService: SidenavProjectionService) { }

  /**
   * Track function for the *ngFor to track only changes in order
   */
  trackFn(index: number): number {
    return index;
  }

}
