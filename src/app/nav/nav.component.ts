import { Component,ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
