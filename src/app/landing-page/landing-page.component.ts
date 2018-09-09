import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { ApiService } from  '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingPageComponent implements OnInit {


private  contacts:  Array<object> = [];
public markers: marker[] = [];

constructor(private  apiService:  ApiService,private router: Router) { }

ngOnInit() {
  this.getContacts();
}



public  getContacts(){
  /*this.apiService.getContacts().subscribe((data:  Array<marker>) => {
    this.markers =  data;
  });*/

  this.apiService.getOverview().subscribe((data:  any) => {

    let marker = [];
    for (let station of data.Data) {
      
      var data_html = "<div class='ui steps'> \
      <div class='link step'> \
        <img src='assets/station/"+ station.image +"' width=150' class='img-station'  > \
        <div class='content'> \
          <div class='title'>"+  station.station_name +"</div> \
          <div class='description'> \
            <div class='ui list'> \
              <div class='item'> \
                ระดับน้ำตอนนี้ \
                <div class='content'>"+ station.water_level_front +"</div> \
              </div> \
              <div class='item'> \
                ระดับน้ำก่อนหน้า \
                <div class='content'>"+ station.water_level_back +"</div> \
              </div> \
              <div class='item'> \
                ปริมาณน้ำฝน \
                <div class='content'>"+ station.rainguage +"</div> \
              </div> \
            </div> \
          </div> \
        </div> \
      </div> \
      <div class='link step'> \
        <div class='content'> \
          <div class='description'><img src='assets/station_record/"+ station.last_image +"' width=150'  ></div> \
        </div> \
      </div> \
    </div>";

      marker.push({
        lat: +station.latitude,
        lng: +station.longtitude,
        label: station.station_name,
        draggable: false,
        data:data_html
      });
    }

    this.markers =  marker;

    console.log('marker',this.markers);

    this.lat = this.markers[1].lat;
    this.lng = this.markers[1].lng;

  });
}



// google maps zoom level
zoom: number = 10;
  
// initial center position for the map
lat: number = 12.8887013;
lng: number = 100.8641094;

previous;

  clickedMarker(infowindow) {
    if (this.previous) {
        this.previous.close();
    }
    this.previous = infowindow;
 }

 gotoHashtag() {
  this.router.navigate( [ '/report' ], {  } );
 }

 onMouseOver(infoWindow, gm) {



  if (this.previous) {
    this.previous.close();
  }
  this.previous = infoWindow;

  infoWindow.open();
}

onMouseOut(infoWindow, gm) {
  if (this.previous) {
    this.previous.close();
  }
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

