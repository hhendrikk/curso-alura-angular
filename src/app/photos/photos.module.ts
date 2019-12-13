import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListModule } from './components/photo-list/photo-list.module';
import { PhotoFormModule } from './components/photo-form/photo-form.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PhotoFormModule, PhotoListModule]
})
export class PhotosModule {}
