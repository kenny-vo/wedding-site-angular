import { Component, OnInit, ViewChild, ElementRef, NgZone, Input } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Message } from './message';
import { GuestbookService } from './guestbook.service';

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.scss'],
  providers: [GuestbookService]

})
export class GuestbookComponent implements OnInit {
  title = 'Guestbook';
  latitude = 30.274198;
  longitude = -97.740489;
  city: string;
  private geoCoder;
  selectedMessage: Message
  previous;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  messages: Message[];

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private guestbookService: GuestbookService) { }

  ngOnInit() {
    console.log(this.previous);
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["(regions)"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
 
          //set latitude, longitude
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.city = place.formatted_address;
        });
      });
    });

    // Get these later for lat / long  ->markers
    this.guestbookService.getMessages().then((messages: Message[]) => {
      this.messages = messages.map((message) => {
        // console.log(message);
        return message;
      })
    })
  }

  private getIndexofMessage = (messageId: String) => {
    return this.messages.findIndex((message) => {
      return message._id === messageId;
    });
  }

  selectMessage(message: Message) {
    this.selectedMessage = message;
  }

  createNewMessage() {
    var message: Message = {
      name:'',
      city: this.city,
      message: '',
      lat: this.latitude,
      long: this.longitude
    };

    // By default, a newly-created contact will have the selected state.
    this.selectMessage(message);
  }

  addMessage = (message: Message) => {
    this.messages.push(message);
    this.selectMessage(message);
    this.selectedMessage = null;
    return this.messages;
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        console.log(status);
      } else {
        console.log('Geocoder failed due to: ' + status);
      }
    });
  }

  clickedMarker(infoWindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infoWindow;
  }
}
