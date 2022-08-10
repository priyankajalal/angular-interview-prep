import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
   mySal = 9;
   title ="pipedemo"
  constructor() { }

  ngOnInit() {
  }

}
