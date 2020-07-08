import {Injectable} from '@angular/core';
import {PhotosProvider} from '../photos-provider';
import {Observable, of} from 'rxjs';
import {Photo} from '../photo';
import images from 'src/db/images.json';

/**
 * The service that implements {@link PhotosProvider} by providing the data from the local storage
 */
@Injectable()
export class LocalPhotosProviderService implements PhotosProvider {

  constructor() { }

  /**
   * @inheritDoc
   */
  get(): Observable<Photo[]> {
    return of<Photo[]>(images.data || []);
  }
}
