import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoListResolver } from './components/photo-list/photo-list.resolver';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';

const routes = [
  {
    path: 'add',
    component: PhotoFormComponent
  },
  {
    path: ':username',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule {}
