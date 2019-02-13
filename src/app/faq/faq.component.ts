import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    window.scroll(0,0);
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {      
      document.getElementById('nav').classList.add('scrolled');
    } else {
      document.getElementById('nav').classList.remove('scrolled');
    }
  }
}
