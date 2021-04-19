import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevationDataComponent } from './elevation-data.component';

describe('ElevationDataComponent', () => {
  let component: ElevationDataComponent;
  let fixture: ComponentFixture<ElevationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElevationDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
