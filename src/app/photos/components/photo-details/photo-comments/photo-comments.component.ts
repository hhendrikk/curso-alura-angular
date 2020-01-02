import { Component, OnInit, Input } from '@angular/core';
import { PhotosService } from 'src/app/photos/services/photos.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorFormError } from 'src/app/core/form/validator-form-error.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: '/photo-comments.component.html',
  styleUrls: ['./photo-comments.component.scss']
})
export class PhotoCommentsComponent implements OnInit {
  @Input() photoId: number;
  comments$: Observable<Comment[]>;
  commentForm: FormGroup;

  constructor(
    private photosService: PhotosService,
    private formBuilder: FormBuilder,
    public error: ValidatorFormError
  ) {}
  ngOnInit(): void {
    this.comments$ = this.photosService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    });

    this.error.setFormGroup(this.commentForm);
  }

  save() {
    const comment = this.commentForm.get('comment').value;
    this.comments$ = this.photosService
      .newComment(this.photoId, comment)
      .pipe(switchMap(() => this.photosService.getComments(this.photoId)))
      .pipe(tap(() => this.commentForm.reset()));
  }
}
