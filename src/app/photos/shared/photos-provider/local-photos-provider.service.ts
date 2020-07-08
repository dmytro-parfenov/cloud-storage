import {Injectable} from '@angular/core';
import {PhotosProvider} from '../photos-provider';
import {Observable, of} from 'rxjs';
import {Photo} from '../photo';
import images from 'src/db/images.json';

@Injectable()
export class LocalPhotosProviderService implements PhotosProvider {

  constructor() { }

  get(): Observable<Photo[]> {
    return of<Photo[]>(images.data || []);
  }
}
