import { Component, OnInit, ViewChild, ElementRef, NgZone, Input } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
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
  zoom = 3.5;
  city: string;
  private geoCoder;
  selectedMessage: Message;
  previous;
  travelDistance: number;
  selectedCity: boolean;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  @ViewChild(AgmMap)
  public agmMap: AgmMap

  messages: Message[];

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private guestbookService: GuestbookService) { }

  ngOnInit() {
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
 
          //set variables
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 3.5;
          this.city = place.formatted_address;
          this.selectedCity = false;
          this.asTheCrowFlies(30.274198, -97.740489, this.latitude, this.longitude);
        });
      });
    });

    this.guestbookService.getMessages().then((messages: Message[]) => {
        this.messages = messages.map((message) => {
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
    for (let check of this.messages) {
      if (this.longitude === check.long) {
        this.longitude = this.longitude + -0.001;
      }
    }
    var message: Message = {
      name:'',
      city: this.city,
      message: '',
      lat: this.latitude,
      long: this.longitude
    };

    // By default, a newly-created contact will have the selected state.
    this.selectMessage(message);

    if (!message.city) {
      this.selectedCity = true;
    }
  }

  addMessage = (message: Message) => {
    this.messages.push(message);
    this.selectMessage(message);
    this.selectedMessage = null;
    this.selectedCity = null;
    this.city = null;
    this.travelDistance = null;

    return this.messages;
    this.guestbookService.getMessages().then((messages: Message[]) => {
      this.messages = messages.map((message) => {
        return message;
      });
    });
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

  listClick(message) {
    this.latitude = message.lat;
    this.longitude = message.long;
    this.zoom = 7;
    this.agmMap.triggerResize();
  }

  fullMap() {
    console.log('click')
    this.latitude = 30.274198;
    this.longitude = -97.740489;
    this.zoom = 3.5;
    this.agmMap.triggerResize();
  }

  asTheCrowFlies(x1, y1, x2, y2) {
    var travelDistance = 0;
    const RADIANS: number = 180 / 3.14159265;
    
    if (x1 == x2 && y1 == y2) {
      travelDistance = 0;
    
    } else {
      // Calculating Distance between Points
      var lt1 = x1 / RADIANS;
      var lg1 = y1 / RADIANS;
      var lt2 = x2 / RADIANS;
      var lg2 = y2 / RADIANS;
    
      // radius of earth in miles (3,958.8) * position on surface of sphere
      travelDistance = (3958.8) * Math.acos(Math.sin(lt1) * Math.sin(lt2) + Math.cos(lt1) * Math.cos(lt2) * Math.cos(lg2 - lg1));
    }
    this.travelDistance = travelDistance;
    return travelDistance;

  }
}
