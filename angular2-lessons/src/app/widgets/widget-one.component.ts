import { Component, Input } from "@angular/core";

@Component({
  selector: 'widget-one',
  styles: [`
:host{
  display: block;
  border: 3px dashed black;
  font-family: "Times New Roman";
}
    `],
  template: `
<div>ONE</div>
<div>{{message}}</div>
  `
})

export class WidgetOne{
  @Input() message;
}
