import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialHComponent } from './historial-h.component';

describe('HistorialHComponent', () => {
  let component: HistorialHComponent;
  let fixture: ComponentFixture<HistorialHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
