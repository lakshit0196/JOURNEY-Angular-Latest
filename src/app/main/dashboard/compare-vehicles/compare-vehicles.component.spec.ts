import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareVehiclesComponent } from './compare-vehicles.component';

describe('CompareVehiclesComponent', () => {
  let component: CompareVehiclesComponent;
  let fixture: ComponentFixture<CompareVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareVehiclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
