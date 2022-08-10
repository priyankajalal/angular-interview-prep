import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name:string;
  constructor() { }

  ngOnInit() {
  }
  click(){
    console.log(`child ${this.name} is clicked`)
  }
  log(){
    console.log('i m logged')
  }
  increment(){
  console.log('increment me')
  }

}
