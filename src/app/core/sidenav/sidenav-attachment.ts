import {Portal} from '@angular/cdk/portal';
import * as uuid from 'uuid';

/**
 * Represents the attachment that is injected to the {@link SidenavProjectionContentComponent}
 */
export class SidenavAttachment<T = any> {

  readonly id = uuid.v4();

  constructor(readonly portal: Portal<T>,
              readonly order: number) {
  }
}
