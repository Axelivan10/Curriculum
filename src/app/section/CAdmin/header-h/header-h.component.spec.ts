import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHComponent } from './header-h.component';

describe('HeaderHComponent', () => {
  let component: HeaderHComponent;
  let fixture: ComponentFixture<HeaderHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
