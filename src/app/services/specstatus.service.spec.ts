import { TestBed } from '@angular/core/testing';

import { SpecstatusService } from './specstatus.service';

describe('SpecstatusService', () => {
  let service: SpecstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
