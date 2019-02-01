import { Component, HostListener, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { Person, SearchService } from './shared';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  query: string;
  searchResults: Array<Person>;

  constructor(@Inject(DOCUMENT) private document: Document, private searchService: SearchService) { }
  
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {      
      document.getElementById('nav').classList.add('scrolled');
    } else {
      document.getElementById('nav').classList.remove('scrolled');
    }

  }
  name = 'Angular';
  
  search(): void {
    this.searchService.search(this.query).subscribe(
      (data: any) => { this.searchResults = data; },
      error => console.log(error)
    );
  }
  
}



