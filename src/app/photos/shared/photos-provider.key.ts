import {InjectionToken} from '@angular/core';
import {PhotosProvider} from './photos-provider';

/**
 * An injection token for the {@link PhotosProvider} that will be used in DI container
 */
export const PHOTOS_PROVIDER = new InjectionToken<PhotosProvider>('photos-provider');
