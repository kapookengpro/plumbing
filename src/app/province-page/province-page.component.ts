import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-province-page',
  templateUrl: './province-page.component.html',
  styleUrls: ['./province-page.component.css']
})
export class ProvincePageComponent implements OnInit {

  constructor(private  apiService:  ApiService) { }

  public Provinces = [];
  public Stations = [];
  province;

  ngOnInit() {
    this.apiService.getProvinceAll().subscribe((data:  any) => {
      
      this.Provinces = data.Data;
      this.province = data.Data[0].Value;
      this.SelectProvince();
    });
  }

  SelectProvince():void{
     this.apiService.getProvince(this.province).subscribe((data:  any) => {
      this.Stations = data.Data;
     })

  }

}
