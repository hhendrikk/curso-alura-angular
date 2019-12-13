import { Component, OnInit, OnDestroy } from '@angular/core';

import { IPhoto } from '../../models/photo.model';
import { ActivatedRoute } from '@angular/router';

import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos: IPhoto[] = [];
  filter: string;
  currentPage = 1;
  hasMore = true;
  username: string;

  constructor(private route: ActivatedRoute, private service: PhotosService) {}

  ngOnInit() {
    this.username = this.route.snapshot.params.username;
    this.photos = this.route.snapshot.data.photos;
  }

  load() {
    this.service
      .listFromUsernamePaging(this.username, ++this.currentPage)
      .subscribe((photos: IPhoto[]) => {
        this.photos = this.photos.concat(photos);

        if (!photos.length) {
          this.hasMore = false;
        }
      });
  }
}
