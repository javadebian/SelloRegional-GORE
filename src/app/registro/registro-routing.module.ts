import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistroGobiernoLocalComponent} from "./components/registro-gobierno-local/registro-gobierno-local.component";

const routes: Routes = [
  {
    path:'',
    component: RegistroGobiernoLocalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
