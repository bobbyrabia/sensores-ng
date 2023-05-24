import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResumeNodesComponent} from "src/app/modules/resume-nodes/resume-nodes.component";
import {AppLayoutComponent} from "src/app/layout/app.layout.component";

const routes: Routes = [
  {
    path:'',
    component:AppLayoutComponent,
    children:[
      {
        path:"",
        component:ResumeNodesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
