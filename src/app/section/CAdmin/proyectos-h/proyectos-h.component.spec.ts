import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosHComponent } from './proyectos-h.component';

describe('ProyectosHComponent', () => {
  let component: ProyectosHComponent;
  let fixture: ComponentFixture<ProyectosHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
