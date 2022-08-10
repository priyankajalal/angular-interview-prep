import { Component, ElementRef, OnInit,QueryList,Renderer2,ViewChild,ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild("highlight",{static:false}) marker:ElementRef;
  @ViewChild('someInput', {static: false}) someInput!: ElementRef;
  @ViewChild(ChildComponent,{static:false}) child:ChildComponent;
  @ViewChildren(ChildComponent) childrens:QueryList<any>;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

    ngAfterViewInit() {
      this.marker.nativeElement.style.color= "red";
      this.someInput.nativeElement.value = 'Whale!';
      this.renderer.setStyle(this.someInput.nativeElement,'backgroundColor','pink');

      
  }
  clickChild(){
    
      this.child.click();  
      this.child.increment()
      //this.childrens.forEach(item=>{item.click()})
  }

}
