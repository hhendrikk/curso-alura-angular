import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListModule } from './components/photo-list/photo-list.module';
import { PhotoFormModule } from './components/photo-form/photo-form.module';
import { PhotosRoutingModule } from './photos-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    PhotoFormModule,
    PhotoListModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule {}
