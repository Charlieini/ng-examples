import { Component, OnInit, Directive, Input, HostListener, Injectable, HostBinding } from '@angular/core';

@Injectable()
export class OnlineService{
  online = true

  constructor(){
    setInterval(()=> {
      this.online = Math.random() > .5
    }, 1000)
  }
}

@Directive({
  selector:'[online]'
})

export class OnlineDirective{
  @HostBinding('disabled') get disabled(){
    return this.online.online
  }

  @HostBinding('class.offline') get offline(){
    return this.online.online
  }

  constructor(private online:OnlineService){}
}

@Injectable()
export class TrackingService{
  logs = []
  log(trackingEvent){
    this.logs.push(trackingEvent)
    console.log(this.logs)
  }
}

@Directive({
  selector: '[track]'
})

export class TrackDirective{
  @Input() track

  @HostListener('click')
    onClick(){
      this.tracking.log({event: 'click', message: this.track})
    }

    @HostListener('mouseover')
      onMouseover(){
        this.tracking.log({event: 'mouseover', message: this.track})
      }

    constructor(private tracking:TrackingService){}
}

@Component({
  selector: 'bttn',
  templateUrl: './bttn.component.html',
  styleUrls: ['./bttn.component.css']
})
export class BttnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
