import { TestBed } from '@angular/core/testing';

import { BusinesscategoryService } from './businesscategory.service';

describe('BusinesscategoryService', () => {
  let service: BusinesscategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinesscategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
