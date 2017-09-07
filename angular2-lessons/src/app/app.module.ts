import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WidgetOne } from './widgets/widget-one.component';
import { ServicesModule } from './services/services.module';
import { WidgetTwo } from './widgets/widget-two.component';
import { WidgetThree } from './widgets/widget-three.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WidgetOne,
    WidgetTwo,
    WidgetThree
  ],
  entryComponents: [WidgetThree],
  imports: [
    BrowserModule,
    ServicesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
