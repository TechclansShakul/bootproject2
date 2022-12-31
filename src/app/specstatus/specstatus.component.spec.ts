import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecstatusComponent } from './specstatus.component';

describe('SpecstatusComponent', () => {
  let component: SpecstatusComponent;
  let fixture: ComponentFixture<SpecstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
