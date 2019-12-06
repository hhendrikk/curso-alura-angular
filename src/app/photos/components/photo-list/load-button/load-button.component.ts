import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.scss']
})
export class LoadButtonComponent implements OnInit {
  @Input() hasMore: boolean;
  @Output() clickButton: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}
}
