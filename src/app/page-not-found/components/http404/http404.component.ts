import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-http404',
  templateUrl: './http404.component.html',
  styleUrls: ['./http404.component.scss']
})
export class Http404Component {

  constructor(
    private router: Router
  ) {
  }
  public goToApp():void{
    this.router.navigate(['/login']);
  }

}
