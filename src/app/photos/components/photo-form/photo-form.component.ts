import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {
  formPhoto: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formPhoto = this.formBuilder.group({});
  }
}
