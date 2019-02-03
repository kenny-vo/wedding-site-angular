import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'photos', component: PhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
