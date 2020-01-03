import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { IPhoto } from '../models/photo.model';
import { INewPhoto } from '../models/newPhoto.models';
import { PhotoDetail } from '../models/photoDetail.model';
import { map, catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

const API_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

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

  getById(id: number): Observable<PhotoDetail> {
    return this.http.get<PhotoDetail>(`${API_URL}photos/${id}`);
  }

  getComments(photoId: number) {
    return this.http.get<Comment[]>(`${API_URL}photos/${photoId}/comments`);
  }

  newComment(photoId: number, commentText: string) {
    return this.http.post(`${API_URL}photos/${photoId}/comments`, {
      commentText
    });
  }

  remove(photoId: number) {
    return this.http.delete(`${API_URL}photos/${photoId}`);
  }

  like(photoId: number) {
    return this.http
      .post(`${API_URL}photos/${photoId}/like`, {}, { observe: 'response' })
      .pipe(map(res => true))
      .pipe(
        catchError(err => {
          return err.status === '304' ? of(false) : throwError(err);
        })
      );
  }
}
