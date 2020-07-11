import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {PageHeaderTitle} from './page-header-title';

/**
 * The service provides opportunity to update data in {@link PageHeaderComponent}
 */
@Injectable({
  providedIn: 'root'
})
export class PageHeaderService {

  readonly titles$ = new BehaviorSubject<PageHeaderTitle[]>([]);

  constructor() { }

  add(title: PageHeaderTitle): boolean {
    const titles = this.titles$.getValue();

    if (titles.some(t => t.id === title.id)) {
      console.warn(`Page header title with id: "${title.id}" already exists.`);
      return false;
    }

    titles.push(title);

    this.titles$.next(titles);

    return true;
  }

  /**
   * Remove title by the given predicate function
   *
   * @param predicate predicate function that searches specific title
   */
  remove(predicate: (title: PageHeaderTitle) => boolean): boolean {
    const titles = this.titles$.getValue();
    const index = titles.findIndex(predicate);

    if (index < 0) {
      return false;
    }

    const removed = titles.splice(index, 1);
    this.titles$.next(titles);

    return removed.length > 0;
  }
}
