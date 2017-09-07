import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  locations = ["Home", "Away", "Space", "Ocean", "Stars"];

  constructor() { }

  ngOnInit() {
  }

}
