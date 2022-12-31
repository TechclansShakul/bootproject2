import { TestBed } from '@angular/core/testing';

import { DomaincategoryService } from './domaincategory.service';

describe('DomaincategoryService', () => {
  let service: DomaincategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomaincategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
