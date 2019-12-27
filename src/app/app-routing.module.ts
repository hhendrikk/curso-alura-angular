import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './errors/components/not-found-page/not-found-page.component';
import { PhotoListComponent } from './photos/components/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/components/photo-list/photo-list.resolver';
import { PermissionGuard } from './core/auth/permission.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'user/:username',
    pathMatch: 'full',
    redirectTo: 'photos/:username'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'photos',
    loadChildren: () =>
      import('./photos/photos.module').then(m => m.PhotosModule)
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
