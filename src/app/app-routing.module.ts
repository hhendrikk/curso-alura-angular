import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './errors/components/not-found-page/not-found-page.component';
import { PhotoListComponent } from './photos/components/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/components/photo-list/photo-list.resolver';

const routes: Routes = [
  {
    path: 'photos/:username',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    }
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
