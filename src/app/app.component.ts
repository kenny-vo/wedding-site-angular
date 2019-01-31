import { Component, HostListener, Inject } from '@angular/core';
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
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {      
      document.getElementById('nav').classList.add('scrolled');
    } else {
      document.getElementById('nav').classList.remove('scrolled');
    }

  }
  name = 'Angular';
}
