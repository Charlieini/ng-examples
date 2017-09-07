import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  @ViewChild('foo') template;

  constructor(private view:ViewContainerRef) {}

  ngAfterContentInit(): void{
    this.view.createEmbeddedView(this.template);
  }

  ngOnInit() {
  }

}
