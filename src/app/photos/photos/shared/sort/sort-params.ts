import {SortType} from './sort-type.enum';
import {SortOrder} from './sort-order.enum';

export class SortParams {

  readonly type: SortType;
  readonly order: SortOrder;

  constructor({type, order}: Partial<SortParams> = {}) {
    this.type = type || SortType.Name;
    this.order = order || SortOrder.Asc;
  }
}
