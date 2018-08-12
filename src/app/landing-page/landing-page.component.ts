import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingPageComponent implements OnInit {


private  contacts:  Array<object> = [];
private markers: marker[] = [];

constructor(private  apiService:  ApiService) { }

ngOnInit() {
  this.getContacts();
}

public  getContacts(){
  this.apiService.getContacts().subscribe((data:  Array<marker>) => {
    this.markers =  data;
    //this.contacts  =  data;
      //console.log("MARKER ",data);
  });
}



// google maps zoom level
zoom: number = 12;
  
// initial center position for the map
lat: number = 12.8887013;
lng: number = 100.8641094;

clickedMarker(label: string, index: number) {
  console.log(`clicked the marker: ${label || index}`)
}

/*mapClicked($event: MouseEvent) {
  this.markers.push({
    lat: $event.coords.lat,
    lng: $event.coords.lng,
    draggable: true
  });
}*/

markerDragEnd(m: marker, $event: MouseEvent) {
  console.log('dragEnd', m, $event);
}

/*markers: marker[] = [
  {
    lat: 12.888032,
    lng: 100.9217876,
    label: 'A',
    draggable: true
  },
  {
    lat: 12.8684528,
    lng: 100.9377521,
    label: 'B',
    draggable: false
  }
]*/

}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}