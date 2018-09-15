import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-river-basin-page',
  templateUrl: './river-basin-page.component.html',
  styleUrls: ['./river-basin-page.component.css']
})
export class RiverBasinPageComponent implements OnInit {

  constructor(private  apiService:  ApiService) { }

  public Rivers = [];
  public Stations = [];
  river;

  ngOnInit() {
    this.apiService.getRiverAll().subscribe((data:  any) => {
      
      this.Rivers = data.Data;
      this.river = data.Data[0].Value;
      this.SelectRiver();
    });
  }

  SelectRiver():void{
     this.apiService.getRiver(this.river).subscribe((data:  any) => {
      this.Stations = data.Data;
     })

  }


}
