import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesscategoryComponent } from './businesscategory.component';

describe('BusinesscategoryComponent', () => {
  let component: BusinesscategoryComponent;
  let fixture: ComponentFixture<BusinesscategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinesscategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinesscategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
