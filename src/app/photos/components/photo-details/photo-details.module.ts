import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PhotoOwnerDirective } from './photo-owner.directive';

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    PhotoModule,
    SharedModule
  ],
  exports: [PhotoDetailsComponent]
})
export class PhotoDetailsModule {}
