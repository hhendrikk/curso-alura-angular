import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PhotosService } from '../../services/photos.service';
import { PhotoDetail } from '../../models/photoDetail.model';
import { Observable, throwError, of } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { catchError } from 'rxjs/operators';

@Component({
  templateUrl: 'photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<PhotoDetail>;
  comments$: Observable<Comment[]>;

  constructor(
    private route: ActivatedRoute,
    private photosService: PhotosService,
    private router: Router,
    private userService: UserService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const photoId = +params.photo;
      this.photo$ = this.photosService.getById(photoId).pipe(
        catchError(err => {
          this.router.navigate(['not-found']);
          return throwError(err);
        })
      );
      this.comments$ = this.photosService.getComments(photoId);
    });
  }

  remove(photo: PhotoDetail) {
    this.photosService.remove(photo.id).subscribe(() => {
      this.alert.success('Delete photo success', true);
      this.router.navigate(['/photos', this.userService.getUserName()]);
    });
  }

  like(photo: PhotoDetail) {
    this.photosService.like(photo.id).subscribe(liked => {
      if (liked) {
        this.photo$ = this.photosService.getById(photo.id);
      }
    });
  }
}
