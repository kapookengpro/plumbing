import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-station-page',
  templateUrl: './station-page.component.html',
  styleUrls: ['./station-page.component.css']
})
export class StationPageComponent implements OnInit {

  constructor(private  apiService:  ApiService) { }

  public Offices = [];
  public Stations = [];
  office;

  ngOnInit() {
    this.apiService.getOfficeAll().subscribe((data:  any) => {
      
      this.Offices = data.Data;
      this.office = data.Data[0].Value;
      this.SelectOffice();
    });
  }

  SelectOffice():void{
     this.apiService.getOffice(this.office).subscribe((data:  any) => {
      this.Stations = data.Data;
     })

  }


}
