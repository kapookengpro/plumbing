import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css']
})
export class FooterPageComponent implements OnInit {

  public links: link[] = [];

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.getLink();
  }

  public  getLink(){
  
    this.apiService.getLinkAll().subscribe((data:  any) => {
  
      let link = [];
      
      for (let lk of data.Data) {
        link.push({
          text : lk.link_name,
          link : lk.link_url
        })
      }
  
      this.links = link;
    });
  }

}


interface link{
  text: string;
	link: string;
}