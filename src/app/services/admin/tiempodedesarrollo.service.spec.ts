import { TestBed } from '@angular/core/testing';

import { TiempodedesarrolloService } from './tiempodedesarrollo.service';

describe('TiempodedesarrolloService', () => {
  let service: TiempodedesarrolloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiempodedesarrolloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
