import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { PrimengModule } from "../primeng/primeng.module";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    DashboardAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimengModule,
    SharedModule
  ]
})
export class AdminModule { }
