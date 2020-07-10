import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

/**
 * The service provides opportunity to control sidenav visibility
 */
@Injectable({
  providedIn: 'root'
})
export class SidenavVisibilityService {

  readonly visible$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  open(): void {
    this.visible$.next(true);
  }

  close(): void {
    this.visible$.next(false);
  }
}
