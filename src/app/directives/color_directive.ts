import { Directive,ElementRef,Renderer,Input,SimpleChanges } from '@angular/core';

@Directive({
  selector: "[ccColor]"
})
export class ColorDirective {
   @Input('ccColor') color:any="blue";   

  constructor(private el: ElementRef,
              private renderer: Renderer) {
    //noinspection TypeScriptUnresolvedVariable,TypeScriptUnresolvedFunction
    this.renderer.setElementStyle(el.nativeElement, 'backgroundColor', this.color);
    console.log(this.el.nativeElement)
    this.el.nativeElement.value ="test"
  }
  ngOnChanges(changes: SimpleChanges) {
   this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', this.color);
  }
}