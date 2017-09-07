import { NgModule } from "@angular-core";
import { WidgetOne } from "./widget-one.component";

@NgModule ({
  declarations: [WidgetOne],
  exports: [WidgetOne]
})

export class WidgetModule{}
