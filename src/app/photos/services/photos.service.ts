import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPhoto } from '../models/photo.model';
import { INewPhoto } from '../models/newPhoto.models';

const API_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  listFromUsername(username: string): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(`${API_URL}${username}/photos`);
  }

  listFromUsernamePaging(username: string, page: number): Observable<IPhoto[]> {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<IPhoto[]>(`${API_URL}${username}/photos`, {
      params
    });
  }

  upload(newPhoto: INewPhoto) {
    const formData = new FormData();
    formData.append('imageFile', newPhoto.file);
    formData.append('description', newPhoto.description);
    formData.append('allowComments', newPhoto.allowComments.toString());

    return this.http.post(`${API_URL}photos/upload`, formData);
  }
}
