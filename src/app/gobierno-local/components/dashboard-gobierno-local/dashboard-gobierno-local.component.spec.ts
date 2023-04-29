import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGobiernoLocalComponent } from './dashboard-gobierno-local.component';

describe('DashboardGobiernoLocalComponent', () => {
  let component: DashboardGobiernoLocalComponent;
  let fixture: ComponentFixture<DashboardGobiernoLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGobiernoLocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGobiernoLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
