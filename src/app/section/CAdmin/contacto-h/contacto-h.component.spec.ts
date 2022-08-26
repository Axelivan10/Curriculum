import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoHComponent } from './contacto-h.component';

describe('ContactoHComponent', () => {
  let component: ContactoHComponent;
  let fixture: ComponentFixture<ContactoHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
