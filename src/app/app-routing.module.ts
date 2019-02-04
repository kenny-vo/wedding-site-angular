import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component'
import { HomeComponent } from './home/home.component';
import { KlComponent } from './kl/kl.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'kl', component: KlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled', useHash: true
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
