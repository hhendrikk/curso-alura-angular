import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ap-comments-likes',
  templateUrl: './comments-likes.component.html',
  styleUrls: ['./comments-likes.component.scss']
})
export class CommentsLikesComponent implements OnInit {
  @Input() comments = 0;
  @Input() likes = 0;

  constructor() {}

  ngOnInit() {}
}
