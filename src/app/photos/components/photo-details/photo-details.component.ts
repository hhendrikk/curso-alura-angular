import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService } from '../../services/photos.service';
import { PhotoDetail } from '../../models/photoDetail.model';
import { Observable } from 'rxjs';

@Component({
  templateUrl: 'photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<PhotoDetail>;
  comments$: Observable<Comment[]>;

  constructor(
    private route: ActivatedRoute,
    private photosService: PhotosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const photoId = +this.route.snapshot.paramMap.get('photo');
    this.photo$ = this.photosService.getById(photoId);
    this.comments$ = this.photosService.getComments(photoId);
  }

  remove() {
    const photoId = +this.route.snapshot.paramMap.get('photo');
    this.photosService
      .remove(photoId)
      .subscribe(() => this.router.navigate(['']));
  }
}
