import { TestBed } from '@angular/core/testing';

import { ControlcategoryService } from './controlcategory.service';

describe('ControlcategoryService', () => {
  let service: ControlcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
