import {Injectable} from '@angular/core';
import {SidenavAttachment} from './sidenav-attachment';
import {BehaviorSubject} from 'rxjs';

/**
 * The service that provides opportunity to attach the content to the {@link SidenavProjectionContentComponent}
 */
@Injectable({
  providedIn: 'root'
})
export class SidenavProjectionService {

  /**
   * A subject represents the array of attachments
   */
  readonly attachments$ = new BehaviorSubject<SidenavAttachment[]>([]);

  constructor() { }

  /**
   * Attach the given attachment
   */
  attach<T>(attachment: SidenavAttachment<T>): boolean {
    const attachments = this.attachments$.getValue();
    attachments.push(attachment);

    this.attachments$.next(attachments);
    return true;
  }

  /**
   * Detach the attachment by the given predicate function
   *
   * @param predicate predicate function that searches specific attachment
   */
  detach(predicate: (attachment: SidenavAttachment) => boolean): boolean {
    const attachments = this.attachments$.getValue();
    const index = attachments.findIndex(predicate);

    if (index < 0) {
      return false;
    }

    const removed = attachments.splice(index, 1);
    this.attachments$.next(attachments);

    return removed.length > 0;
  }
}
