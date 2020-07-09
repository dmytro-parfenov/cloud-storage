import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavVisibilityService {

  readonly visible$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  toggle(): void {
    this.visible$.next(!this.visible$.getValue());
  }

  close(): void {
    this.visible$.next(false);
  }
}
