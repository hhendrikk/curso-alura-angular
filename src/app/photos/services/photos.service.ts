import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPhoto } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  listFromUsername(username: string): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(`http://localhost:3000/${username}/photos`);
  }
}
