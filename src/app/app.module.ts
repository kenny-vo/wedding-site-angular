import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { PhotosComponent } from './photos/photos.component';

import { GrdFilterPipe } from './contacts/grd-filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactListComponent,
    GrdFilterPipe,
    PhotosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }