import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHComponent } from './footer-h.component';

describe('FooterHComponent', () => {
  let component: FooterHComponent;
  let fixture: ComponentFixture<FooterHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
