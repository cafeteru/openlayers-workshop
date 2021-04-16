import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyingFeaturesComponent } from './modifying-features.component';

describe('ModifyingFeaturesComponent', () => {
  let component: ModifyingFeaturesComponent;
  let fixture: ComponentFixture<ModifyingFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyingFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyingFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
