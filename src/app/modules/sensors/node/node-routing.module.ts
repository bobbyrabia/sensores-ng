import {NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import {GeneralMainComponent} from "./general/pages/general-main/general-main.component";
import {
    BarometricPreassureMainComponent
} from "./barometric-preassure/pages/barometric-preassure-main/barometric-preassure-main.component";
import {Co2MainComponent} from "./co2/pages/co2-main/co2-main.component";
import {HumidityMainComponent} from "./humidity/pages/humidity-main/humidity-main.component";
import {WindSpeedMainComponent} from "./wind-speed/pages/wind-speed-main/wind-speed-main.component";

const routes:Routes=[
    {
        path:'', component:GeneralMainComponent,
    },
    {
        path:'atm-preassure', component:BarometricPreassureMainComponent
    },
    {
        path:'co2', component:Co2MainComponent
    },
    {
        path:'hum', component:HumidityMainComponent
    },
    {
        path:'temp', component:BarometricPreassureMainComponent
    },
    {
        path:'wind', component:WindSpeedMainComponent
    }
];
@NgModule(
    {
        imports:[RouterModule.forChild(routes)],
        exports:[RouterModule]
    }
)
export class GeneralRoutingModule{}
