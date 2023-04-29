import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoTecnicoComponent } from './equipo-tecnico.component';

describe('EquipoTecnicoComponent', () => {
  let component: EquipoTecnicoComponent;
  let fixture: ComponentFixture<EquipoTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoTecnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipoTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
