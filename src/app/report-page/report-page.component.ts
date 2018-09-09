import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import {ExcelService} from '../excel.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  constructor(private  apiService:  ApiService,private ExcelService:ExcelService) { }

  public data = [];
  public station_list = [];
  public data_records: data_record[] = [];

  station;
  startDate;
  endDate;

  exportAsXLSX():void {
    this.ExcelService.exportAsExcelFile(this.data_records, this.station);
  }


  exportPdf():void{
    let doc = new jsPDF(); 
    doc.autoTable([
      {title: "record_timestamp", dataKey: "record_timestamp"},
      {title: "water_level_front", dataKey: "water_level_front"}, 
      {title: "water_level_back", dataKey: "water_level_back"}, 
      {title: "rainguage", dataKey: "rainguage"}
    ],
       this.data_records 
    );
    doc.save(this.station+'.pdf')
  }


  Search():void{

    this.apiService.getRecord(this.station,this.startDate,this.endDate).subscribe((data:  any) => {
      console.log(data);
      this.data_records = data.Data;
  });

  }

  ngOnInit() {

    this.apiService.getStationAll().subscribe((data:  any) => {
        for(let s of data.Data){
          this.station_list.push({
            KEY : s.Value,
            VALUE : s.Text
          });
        }
    });

  }

}


interface data_record{
  record_timestamp: Date;
	water_level_front: number;
	water_level_back: number;
	rainguage: number;
}
