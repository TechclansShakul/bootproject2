import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlcategoryComponent } from './controlcategory.component';

describe('ControlcategoryComponent', () => {
  let component: ControlcategoryComponent;
  let fixture: ComponentFixture<ControlcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
