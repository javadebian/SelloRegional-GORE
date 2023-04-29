import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { PrimengModule } from "../primeng/primeng.module";
import { FormsModule } from "@angular/forms";
import { RegistroGobiernoLocalComponent } from './components/registro-gobierno-local/registro-gobierno-local.component';


@NgModule({
  declarations: [
    RegistroGobiernoLocalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RegistroRoutingModule,
    PrimengModule
  ]
})
export class RegistroModule { }
