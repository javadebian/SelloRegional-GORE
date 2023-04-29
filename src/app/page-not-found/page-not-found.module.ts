import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { Http404Component } from './components/http404/http404.component';
import {PrimengModule} from "../primeng/primeng.module";


@NgModule({
  declarations: [
    Http404Component
  ],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    PrimengModule
  ]
})
export class PageNotFoundModule { }
