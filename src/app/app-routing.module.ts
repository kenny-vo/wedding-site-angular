import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component'
import { HomeComponent } from './home/home.component';
import { KlComponent } from './kl/kl.component';
import { FaqComponent } from './faq/faq.component';
import { PhotosKlComponent } from './photos-kl/photos-kl.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'kl', component: KlComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'photos-kl', component: PhotosKlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
