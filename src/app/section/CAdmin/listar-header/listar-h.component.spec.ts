import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHeaderComponent } from './listar-h.component';

describe('ListarHComponent', () => {
  let component: ListarHeaderComponent;
  let fixture: ComponentFixture<ListarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
