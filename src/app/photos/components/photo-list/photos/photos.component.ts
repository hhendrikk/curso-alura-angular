import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IPhoto } from 'src/app/photos/models/photo.model';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnChanges {
  @Input() photos: IPhoto[] = [];
  rows: any[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos) {
      this.rows = this.columnsGroup(this.photos);
    }
  }

  columnsGroup(photos: IPhoto[]) {
    const newRows: any[] = [];
    photos = photos || [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }

    return newRows;
  }
}
