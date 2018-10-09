import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import {ExcelService} from '../excel.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { ActivatedRoute } from '@angular/router';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  constructor(private  apiService:  ApiService,private ExcelService:ExcelService,private router: ActivatedRoute) { }

  public data = [];
  public station_list = [];
  public data_records: data_record[] = [];

  

  station;
  startDate;
  endDate;


  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showLegendText = "ประเภท";
  showXAxisLabel = true;
  xAxisLabel = 'วันเวลา';
  showYAxisLabel = true;
  yAxisLabel = 'ระดับน้ำ';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  

  exportAsXLSX():void {
    this.ExcelService.exportAsExcelFile(this.data_records, this.station);
  }


  exportPdf():void{
    let doc = new jsPDF(); 
    doc.setLanguage('th')
    doc.autoTable([
      {title: "Time", dataKey: "record_timestamp"},
      {title: "Water Present", dataKey: "water_level_front"}, 
      {title: "Water Before", dataKey: "water_level_back"}, 
      {title: "Rainguage", dataKey: "rainguage"}
    ],
       this.data_records 
    );
    doc.save(this.station+'.pdf')
  }


  Search():void{

    this.apiService.getRecord(this.station,this.startDate,this.endDate).subscribe((data:  any) => {
      this.data_records = data.Data.record;
      this.multi = data.Data.chart;
    });

  }

  private sub: any;

  ngOnInit() {

    this.apiService.getStationAll().subscribe((data:  any) => {
        for(let s of data.Data){
          this.station_list.push({
            KEY : s.Value,
            VALUE : s.Text
          });
        }
    });


    let station_active = this.router.snapshot.paramMap.get('station');
    if(station_active != null)
    {
      this.station = station_active;
      var date = new Date();
      this.startDate = {
        year:date.getFullYear(),
        month:date.getMonth()+1,
        day:date.getDate()
      }

      this.endDate = {
        year:date.getFullYear(),
        month:date.getMonth()+1,
        day:date.getDate()
      }
      this.Search();
    }

  }

  

}


interface data_record{
  record_timestamp: Date;
	water_level_front: number;
	water_level_back: number;
	rainguage: number;
}

export var single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  }
];

export var multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }
];


