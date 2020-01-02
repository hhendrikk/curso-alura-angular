import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoListResolver } from './components/photo-list/photo-list.resolver';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PermissionGuard } from '../core/auth/permission.guard';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';

const routes = [
  {
    path: 'add',
    component: PhotoFormComponent,
    canActivate: [PermissionGuard]
  },
  {
    path: 'detail/:photo',
    component: PhotoDetailsComponent
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
