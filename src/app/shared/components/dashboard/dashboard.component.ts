import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  activeTab1: number = 0;

  activeTab2: number = 5;

  constructor() {
  }
  ngOnInit(): void {
  }
}
