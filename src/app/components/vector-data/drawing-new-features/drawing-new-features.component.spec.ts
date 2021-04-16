import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingNewFeaturesComponent } from './drawing-new-features.component';

describe('DrawingNewFeaturesComponent', () => {
  let component: DrawingNewFeaturesComponent;
  let fixture: ComponentFixture<DrawingNewFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawingNewFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingNewFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
