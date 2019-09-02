import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { PhotosComponent } from './photos/photos.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { KlComponent } from './kl/kl.component';
import { ContactListklComponent } from './contacts/contact-list-kl/contact-list-kl.component';
import { LightboxModule } from 'ngx-lightbox';
import { HeaderComponent } from './header/header.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { PhotosKlComponent } from './photos-kl/photos-kl.component';

import { GrdFilterPipe } from './contacts/grd-filter.pipe';
import { hasProperty } from './contacts/property-filter.pipe';
import { KlFilterPipe } from './contacts/kl-filter.pipe';
import { UsFilterPipe } from './contacts/us-filter.pipe';
import { GiftsComponent } from './gifts/gifts.component';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactListComponent,
    ContactListklComponent,
    GrdFilterPipe,
    hasProperty,
    PhotosComponent,
    HomeComponent,
    KlComponent,
    HeaderComponent,
    FaqComponent,
    FooterComponent,
    PhotosKlComponent,
    KlFilterPipe,
    UsFilterPipe,
    GiftsComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }