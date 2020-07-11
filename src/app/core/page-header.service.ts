import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

/**
 * The service provides opportunity to update data in {@link PageHeaderComponent}
 */
@Injectable({
  providedIn: 'root'
})
export class PageHeaderService {

  readonly titles$ = new BehaviorSubject<string[]>([]);

  constructor() { }

  add(title: string): void {
    const titles = this.titles$.getValue();
    titles.push(title);

    this.titles$.next(titles);
  }

  remove(title: string): boolean {
    const titles = this.titles$.getValue();

    const index = titles.findIndex(t => t === title);

    this.titles$.next(titles.filter(t => t !== title));

    return index >= 0;
  }
}
