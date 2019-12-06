import { Component, OnInit, OnDestroy } from '@angular/core';

import { IPhoto } from '../../models/photo.model';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: IPhoto[] = [];
  filter: string;
  debounce: Subject<string> = new Subject<string>();
  currentPage = 1;
  hasMore = true;
  username: string;

  constructor(private route: ActivatedRoute, private service: PhotosService) {}

  ngOnInit() {
    this.username = this.route.snapshot.params.username;
    this.photos = this.route.snapshot.data.photos;
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => (this.filter = filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
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
