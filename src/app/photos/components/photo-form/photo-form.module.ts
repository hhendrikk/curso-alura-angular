import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoFormComponent } from './photo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, SharedModule],
  exports: [PhotoFormComponent]
})
export class PhotoFormModule {}
