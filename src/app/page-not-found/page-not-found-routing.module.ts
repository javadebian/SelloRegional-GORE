import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Http404Component} from "./components/http404/http404.component";

const routes: Routes = [
  {
    path:'',
    component: Http404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }
