import {SortParams} from './shared/sort/sort-params';
import {PageHeader} from '../../core/page-header';

export interface PhotosResolvedData extends PageHeader {
  sortParams: SortParams;
}
