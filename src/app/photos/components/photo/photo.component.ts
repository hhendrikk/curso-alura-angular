import { Component, OnInit, Input } from '@angular/core';

const PHOTO_ADDRESS = 'http://localhost:3000/imgs';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _url: string;

  @Input() description: string;
  @Input() set url(value: string) {
    if (value.indexOf('data:image') > -1) {
      this._url = value;
    } else {
      this._url = `${PHOTO_ADDRESS}/${value}`;
    }
  }

  get url(): string {
    return this._url;
  }

  constructor() {}

  ngOnInit() {}
}
