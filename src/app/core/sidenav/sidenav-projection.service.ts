import {Injectable, Injector, StaticProvider, Type} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';
import {SidenavProjectionItem} from './sidenav-projection-item';
import {BehaviorSubject} from 'rxjs';
import {SIDENAV_PROJECTION_ITEM_DATA} from './sidenav-projection-idem-data.key';

/**
 * The service that provides opportunity to attach any components inside the {@link SidenavProjectionContentComponent}
 *
 * TODO: Implementation is dirty and should be refactored
 */
@Injectable({
  providedIn: 'root'
})
export class SidenavProjectionService {

  /**
   * A subject represents the array of items to render
   */
    // tslint:disable-next-line:no-any
  readonly items$ = new BehaviorSubject<SidenavProjectionItem<any>[]>([]);

  constructor(private readonly injector: Injector) { }

  /**
   * Attach the given component
   *
   * @param component component type
   * @param data data for the component that is accessible from component by using {@link SIDENAV_PROJECTION_ITEM_DATA} DI token
   */
  attach<T, D>(component: Type<T>, data?: D): SidenavProjectionItem<T> {
    const injector = this.createInjector([
      {
        provide: SIDENAV_PROJECTION_ITEM_DATA,
        useValue: data,
      }
    ]);

    const portal = new ComponentPortal(component, null, injector);

    return this.createAndInsertItem(portal);
  }

  /**
   * Creates new item and insert it to {@link items$}
   */
  private createAndInsertItem<T>(portal: ComponentPortal<T>): SidenavProjectionItem<T> {
    const items = this.items$.getValue().filter(item => item.portal.isAttached);

    const newItem = new SidenavProjectionItem(portal, items.length);

    items.push(newItem);
    this.items$.next(items);

    return newItem;
  }

  /**
   * Create new injector
   */
  private createInjector(providers: StaticProvider[]): Injector {
    return Injector.create({ parent: this.injector, providers });
  }
}
