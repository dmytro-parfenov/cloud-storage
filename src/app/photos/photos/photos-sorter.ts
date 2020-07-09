import {Photo} from '../shared/photo';
import {SortParams} from './shared/sort/sort-params';
import {SortType} from './shared/sort/sort-type.enum';
import {SortOrder} from './shared/sort/sort-order.enum';

/**
 * The class provides opportunity to apply {@link SortParams} on the array of {@link Photo}
 */
export class PhotosSorter {

  constructor(private readonly photos: Photo[]) {
  }

  /**
   * Apply sort params and return an array of photos
   */
  apply(sortParams: SortParams): Photo[] {
    return this.photos.sort(this.resolveCompareFn(sortParams));
  }

  /**
   * Resolve compare function by sort params
   */
  private resolveCompareFn(sortParams: SortParams): (a: Photo, b: Photo) => number {
    switch (sortParams.order) {
      case SortOrder.Asc:
        return this.resolveByAsc(sortParams.type);
      case SortOrder.Desc:
        return this.resolveByDesc(sortParams.type);
    }

    return () => 0;
  }

  /**
   * Resolve compare function by Asc for sort params
   */
  private resolveByAsc(type: SortType): (a: Photo, b: Photo) => number {
    switch (type) {
      case SortType.Name:
        return (a, b) => a.name.localeCompare(b.name);
      case SortType.Size:
        return (a, b) => a.size - b.size;
      case SortType.LastModifiedDate:
        return (a, b) => new Date(a.lastModifiedDate).getTime() - new Date(b.lastModifiedDate).getTime();
    }

    return () => 0;
  }

  /**
   * Resolve compare function by Desc for sort params
   */
  private resolveByDesc(type: SortType): (a: Photo, b: Photo) => number {
    switch (type) {
      case SortType.Name:
        return (a, b) => b.name.localeCompare(a.name);
      case SortType.Size:
        return (a, b) => b.size - a.size;
      case SortType.LastModifiedDate:
        return (a, b) => new Date(b.lastModifiedDate).getTime() - new Date(a.lastModifiedDate).getTime();
    }

    return () => 0;
  }

}
