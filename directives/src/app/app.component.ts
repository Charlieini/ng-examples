import { Component, Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[first]'
})
export class FirstDirective{
  @Input() first
  @HostBinding() get innerText(){
    return this.first
  }

  @HostListener('click', ['$event']) onClick($event){
    this.first = 'clicked'
  }
}

@Component({
  selector: 'basic',
  template: `<div></div>`
})

export class BasicComponent{
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
