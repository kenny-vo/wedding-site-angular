import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-kl',
  templateUrl: './kl.component.html',
  styleUrls: ['./kl.component.scss']
})
export class KlComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) { }
  
  ngOnInit() {
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {      
      document.getElementById('nav').classList.add('scrolled');
    } else {
      document.getElementById('nav').classList.remove('scrolled');
    }
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  name = 'Angular';
}
