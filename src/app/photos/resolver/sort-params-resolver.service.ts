import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {SortParams} from '../photos/shared/sort/sort-params';
import {Observable} from 'rxjs';
import {SortOrder} from '../photos/shared/sort/sort-order.enum';
import {SortType} from '../photos/shared/sort/sort-type.enum';

@Injectable({
  providedIn: 'root'
})
export class SortParamsResolverService implements Resolve<SortParams>{

  constructor() { }

  resolve({queryParamMap}: ActivatedRouteSnapshot): Observable<SortParams> | Promise<SortParams> | SortParams {
    const type = queryParamMap.get('type') ? queryParamMap.get('type') as SortType : undefined;
    const order = queryParamMap.get('order') ? queryParamMap.get('order') as SortOrder : undefined;

    return new SortParams({type, order});
  }
}
