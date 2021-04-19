import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaLevelComponent } from './sea-level.component';

describe('SeaLevelComponent', () => {
  let component: SeaLevelComponent;
  let fixture: ComponentFixture<SeaLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
