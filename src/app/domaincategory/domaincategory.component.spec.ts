import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaincategoryComponent } from './domaincategory.component';

describe('DomaincategoryComponent', () => {
  let component: DomaincategoryComponent;
  let fixture: ComponentFixture<DomaincategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomaincategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomaincategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
