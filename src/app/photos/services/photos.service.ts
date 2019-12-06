import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  listFromUsernamePaging(username: string, page: number): Observable<IPhoto[]> {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<IPhoto[]>(`http://localhost:3000/${username}/photos`, {
      params
    });
  }
}
