import { Component, OnInit, OnDestroy } from '@angular/core';

import { IPhoto } from '../../models/photo.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Observable<IPhoto[]>;
  filter: string;
  debounce: Subject<string> = new Subject<string>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.photos = this.route.snapshot.data.photos;
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => (this.filter = filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
