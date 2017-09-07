import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, FirstDirective } from './app.component';
import { BttnComponent, TrackDirective, TrackingService, OnlineDirective, OnlineService } from './bttn/bttn.component';
import { BasicComponent } from './basic/basic.component';
import { StructuralComponent, ThreeDirective } from './structural/structural.component';
import { StorageComponent, TemplateStorage, TemplateService, SurroundDirective } from './storage/storage.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstDirective,
    BasicComponent,
    BttnComponent,
    BttnComponent,
    TrackDirective,
    OnlineDirective,
    StructuralComponent,
    ThreeDirective,
    StorageComponent,
    TemplateStorage,
    SurroundDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TrackingService,
    OnlineService,
    TemplateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
