import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { IPhoto } from '../../models/photo.model';
import { PhotosService } from '../../services/photos.service';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<IPhoto[]>> {
  constructor(private service: PhotosService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPhoto[]> {
    const username = route.params.username;
    return this.service.listFromUsernamePaging(username, 1);
  }
}
