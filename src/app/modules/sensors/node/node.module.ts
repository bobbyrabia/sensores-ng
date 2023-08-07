import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralMainComponent } from './general/pages/general-main/general-main.component';
import { TemperatureMainComponent } from './temperature/temperature-main/temperature-main.component';
import { HumidityMainComponent } from './humidity/pages/humidity-main/humidity-main.component';
import { BarometricPreassureMainComponent } from './barometric-preassure/pages/barometric-preassure-main/barometric-preassure-main.component';
import { WindSpeedMainComponent } from './wind-speed/pages/wind-speed-main/wind-speed-main.component';
import { Co2MainComponent } from './co2/pages/co2-main/co2-main.component';
import {GeneralRoutingModule} from "./node-routing.module";
import { ChartModule } from 'primeng/chart';




@NgModule({
  declarations: [
    GeneralMainComponent,
    TemperatureMainComponent,
    HumidityMainComponent,
    BarometricPreassureMainComponent,
    WindSpeedMainComponent,
    Co2MainComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    ChartModule
  ]
})
export class NodeModule { }
