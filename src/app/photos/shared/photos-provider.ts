import {Observable} from 'rxjs';
import {Photo} from './photo';

/**
 * An interface that describes available properties for the photos provider
 */
export interface PhotosProvider {
  /**
   * Get an array of photos available
   */
  get(): Observable<Photo[]>;
}
