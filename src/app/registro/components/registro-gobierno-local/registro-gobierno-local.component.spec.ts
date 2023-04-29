import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroGobiernoLocalComponent } from './registro-gobierno-local.component';

describe('RegistroGobiernoLocalComponent', () => {
  let component: RegistroGobiernoLocalComponent;
  let fixture: ComponentFixture<RegistroGobiernoLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroGobiernoLocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroGobiernoLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
