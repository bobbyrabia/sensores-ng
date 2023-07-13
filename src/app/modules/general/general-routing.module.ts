import {NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import {ResumeMainComponent} from "./common/general/pages/resume-main/resume-main.component";

const routes:Routes=[
    {
        path:'general', component:ResumeMainComponent
    }
];
@NgModule(
    {
        imports:[RouterModule.forChild(routes)],
        exports:[RouterModule]
    }
)
export class GeneralRoutingModule{}
