import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component'
import { HomeComponent } from './home/home.component';
import { KlComponent } from './kl/kl.component';
import { FaqComponent } from './faq/faq.component';
import { PhotosKlComponent } from './photos-kl/photos-kl.component';
import { GiftsComponent } from './gifts/gifts.component';
import { MapsComponent } from './maps/maps.component';
import { GuestbookComponent } from './guestbook/guestbook.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'kl', component: KlComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'photos-kl', component: PhotosKlComponent},
  { path: 'gifts', component: GiftsComponent},
  { path: 'todo', component: MapsComponent},
  { path: 'guestbook', component: GuestbookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
