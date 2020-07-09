import {ComponentPortal} from '@angular/cdk/portal';

/**
 * Represents the item that is related to the component created by {@link SidenavProjectionService}
 */
export class SidenavProjectionItem<T> {
  constructor(readonly portal: ComponentPortal<T>, readonly order: number) {
  }
}
