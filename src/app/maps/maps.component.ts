import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  // @ViewChild('gmap') gmapElement: any;
  // map: google.maps.Map;

  ngOnInit() {
    // var mapProp = {
    //   center: new google.maps.LatLng(30.274198, -97.740489),
    //   zoom: 10.5,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };

    // var markers = [
    //   { id: 1, name: 'Terry Blacks BBQ', lat: 30.262613, lng: -97.756022 },
    //   { id: 2, name: 'Barton Springs', lat: 30.263895, lng: -97.770720 },
    // ]


    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    // var marker = new google.maps.Marker({ position: mapProp.center });
    // marker.setMap(this.map);
    // var infowindow = new google.maps.InfoWindow({ content: "Austin" });
    // infowindow.open(this.map, marker);
    // this.setMultipleMarker(markers, this);
  }

  // setMultipleMarker(markers, self) {
  //   markers.forEach(function (marker) {
  //     (function (marker) {
  //       let mark = new google.maps.Marker({ position: new google.maps.LatLng(marker.lat, marker.lng) });
  //       // infowindow.open(self.map, mark);
  //       let number = 0;

  //       mark.addListener('click', () => {
  //         let infoWindow = new google.maps.InfoWindow({ content: marker.name });
  //         // console.log(mark);
  //         // console.log(infoWindow);
  //         // console.log(number);

  //         if (number > 0) {
  //           infoWindow.close();
  //           console.log(number);
  //         }

  //         if (number < 1) {
  //           infoWindow.open(self.map, mark);
  //           number = 1;
  //           console.log(number);
  //         }
  //       });
  //       mark.setMap(self.map);
  //     })(marker)
  //   })
  // }

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
