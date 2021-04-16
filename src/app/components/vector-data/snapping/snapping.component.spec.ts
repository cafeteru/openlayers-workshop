import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnappingComponent } from './snapping.component';

describe('SnappingComponent', () => {
  let component: SnappingComponent;
  let fixture: ComponentFixture<SnappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
