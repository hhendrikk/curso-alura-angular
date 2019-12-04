import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() description: string;
  @Input() url: string;

  constructor() {}

  ngOnInit() {}
}
