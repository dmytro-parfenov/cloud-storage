import {Injectable} from '@angular/core';
import {NavigationExtras, Params, Router} from '@angular/router';
import {fromPromise} from 'rxjs/internal-compatibility';
import {Observable} from 'rxjs';

/**
 * The service that provides opportunity to update URL query params
 */
@Injectable({
  providedIn: 'root'
})
export class QueryParamsService {

  constructor(private readonly router: Router) { }

  update(queryParams: Params, options: Pick<NavigationExtras, 'queryParamsHandling'> = {}): Observable<boolean> {
    return fromPromise(this.router.navigate([], {queryParams, ...options}));
  }
}
