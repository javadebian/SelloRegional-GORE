import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DashboardGobiernoLocalComponent
} from "./components/dashboard-gobierno-local/dashboard-gobierno-local.component";
import {EquipoTecnicoComponent} from "./components/equipo-tecnico/equipo-tecnico.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardGobiernoLocalComponent
  },
  {
    path: 'equipoTecnico',
    component: EquipoTecnicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GobiernoLocalRoutingModule { }
