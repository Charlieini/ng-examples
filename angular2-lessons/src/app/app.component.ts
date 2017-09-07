import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SimpleService } from "./services/services.module";
import { WidgetThree } from "./widgets/widget-three.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('container', {read: ViewContainerRef}) container;

  @ViewChild('template') template;

  widgetRef;

  constructor (
    private simpleService:SimpleService,
    private resolver:ComponentFactoryResolver
  ){}

  ngAfterContentInit(){
    const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);

    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);

    this.widgetRef = this.container.createComponent(widgetFactory, 2);
    this.widgetRef.instance.message= "Not default"

  }

  onClick(){
    const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);

    this.container.createComponent(widgetFactory, 1);
  }

  moveNode(){
    const randomIndex = Math.floor(Math.random() * this.container.length);

    this.container.move(this.widgetRef.hostView, randomIndex)
  }

  detachNode(){
    this.container.detach(2)
  }

  generateTemplate(){
    this.container.createEmbeddedView(this.template,
    {
      description: "sweet",
    });
  }

}
