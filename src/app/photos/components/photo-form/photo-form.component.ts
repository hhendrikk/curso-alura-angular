import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorFormError } from 'src/app/core/form/validator-form-error.service';
import { INewPhoto } from '../../models/newPhoto.models';
import { PhotosService } from '../../services/photos.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {
  photoForm: FormGroup;
  file: File;
  preview: string;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotosService,
    private router: Router,
    private alert: AlertService,
    private userService: UserService,
    public error: ValidatorFormError
  ) {}

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    });

    this.error.setFormGroup(this.photoForm);
  }

  upload() {
    const newPhoto = this.photoForm.getRawValue() as INewPhoto;
    newPhoto.file = this.file;
    this.photoService.upload(newPhoto).subscribe(
      () => {
        this.alert.success('Success operation upload photo!', true);
        this.router.navigate(['/photos', this.userService.getUserName()]);
      },
      error => this.alert.danger('Error operation upload photo!', true)
    );
  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onloadend = () => (this.preview = reader.result as string);
    reader.readAsDataURL(file);
  }
}
