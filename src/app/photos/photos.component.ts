import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig, LightboxEvent, LIGHTBOX_EVENT, IEvent, IAlbum } from 'ngx-lightbox';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  public albums: Array<IAlbum>;
  private _subscription: Subscription;

  constructor(
    private _lightbox: Lightbox,
    private _lightboxEvent: LightboxEvent,
    private _lighboxConfig: LightboxConfig
  ) {
    this.albums = [];
    for (let i = 1; i <= 8; i++) {
      const src = '../assets/images/shan-kenny-photo-' + i + '.jpg';
      const caption = 'Shan and Kenny Photo Album';
      const thumb = '../assets/images/shan-kenny-photo-' + i + '.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
     };
      this.albums.push(album);
    }
    // set default config
    this._lighboxConfig.fadeDuration = 1
  }

  ngOnInit() {
  }

  open(index: number): void {
    this._subscription = this._lightboxEvent.lightboxEvent$.subscribe((event: IEvent) => this._onReceivedEvent(event));

    console.log('hitt' + index);
    this._lightbox.open(this.albums, index, { wrapAround: true, showImageNumberLabel: true });
  }

  private _onReceivedEvent(event: IEvent): void {
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      this._subscription.unsubscribe();
    }
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
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
