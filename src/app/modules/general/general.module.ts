import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeMainComponent } from './common/general/pages/resume-main/resume-main.component';
import {ButtonModule} from "primeng/button";
import {ChartModule} from "primeng/chart";
import {MenuModule} from "primeng/menu";
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {GeneralRoutingModule} from "./general-routing.module";



@NgModule({
  declarations: [
    ResumeMainComponent
  ],
    imports: [
        CommonModule,
        ButtonModule,
        ChartModule,
        MenuModule,
        SharedModule,
        TableModule,
        GeneralRoutingModule
    ]
})
export class GeneralModule { }
