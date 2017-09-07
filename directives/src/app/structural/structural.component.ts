import { Component, OnInit, ElementRef, Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[three]'
})

export class ThreeDirective{
  @Input() set threeFrom({one,two,three}){
    this.view.clear();

    this.view.createEmbeddedView(this.template, {
      $implicit: one
    })
    this.view.createEmbeddedView(this.template, {
      $implicit: two
    })
    this.view.createEmbeddedView(this.template, {
      $implicit: three
    })
  }

  constructor(
    el:ElementRef,
    private view:ViewContainerRef,
    private template:TemplateRef<any>
  ){
    console.log(el.nativeElement);
  }
}

@Component({
  selector: 'structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  messages = {
    one: 'Awesome',
    two: 'Amazing',
    three: 'Cool'
  }

  constructor(){
    setInterval(()=>{
      this.messages = {
        one: 'One ' + Math.random().toString().slice(0,3),
        two: 'two '  + Math.random().toString().slice(0,3),
        three: 'Three ' + Math.random().toString().slice(0,3)
      }
    },1000)
  }

  ngOnInit(){

  }

}
