import { Component, HostListener, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(@Inject(DOCUMENT) private document: Document) { }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {      
      document.getElementById('nav').classList.add('scrolled');
    } else {
      document.getElementById('nav').classList.remove('scrolled');
    }
  }
  name = 'Angular';
}



