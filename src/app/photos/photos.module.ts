import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotosComponent } from './components/photo-list/photos/photos.component';
import { FilterByDescriptionPipe } from './components/photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './components/photo-list/load-button/load-button.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotoComponent,
    PhotoFormComponent,
    PhotosComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent
  ],
  imports: [CommonModule, HttpClientModule]
})
export class PhotosModule {}
