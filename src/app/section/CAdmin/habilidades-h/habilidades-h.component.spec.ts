import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesHComponent } from './habilidades-h.component';

describe('HabilidadesHComponent', () => {
  let component: HabilidadesHComponent;
  let fixture: ComponentFixture<HabilidadesHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
