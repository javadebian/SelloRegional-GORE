import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { GobiernoLocalRoutingModule } from "./gobierno-local-routing.module";
import { DashboardGobiernoLocalComponent } from './components/dashboard-gobierno-local/dashboard-gobierno-local.component';
import { PrimengModule } from "../primeng/primeng.module";
import { EquipoTecnicoComponent } from './components/equipo-tecnico/equipo-tecnico.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    DashboardGobiernoLocalComponent,
    EquipoTecnicoComponent
  ],
  imports: [
    CommonModule,
    GobiernoLocalRoutingModule,
    PrimengModule,
    SharedModule
  ]
})
export class GobiernoLocalModule { }
