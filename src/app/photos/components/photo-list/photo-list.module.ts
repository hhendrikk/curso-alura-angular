import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoModule } from '../photo/photo.module';
import { HttpClientModule } from '@angular/common/http';
import { CommentsLikesComponent } from './comments-likes/comments-likes.component';
import { PhotoSearchComponent } from './photo-search/photo-search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoadButtonComponent,
    PhotosComponent,
    PhotoListComponent,
    FilterByDescriptionPipe,
    CommentsLikesComponent,
    PhotoSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    PhotoModule
  ]
})
export class PhotoListModule {}
