import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro-gobierno-local',
  templateUrl: './registro-gobierno-local.component.html',
  styleUrls: ['./registro-gobierno-local.component.scss']
})
export class RegistroGobiernoLocalComponent {
  munisialidades: any[] = [{name: "nuniurubamba", value: "Municipalidad de Urubamba"},{name: "muniCalca", value: "Municipalidad de Calca"}];
  constructor(
    private router: Router
  ) {
  }
  public goToApp():void{
    this.router.navigate(['/registro']);
  }
}
