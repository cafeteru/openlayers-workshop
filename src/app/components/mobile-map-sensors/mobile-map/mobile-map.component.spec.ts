import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMapComponent } from './mobile-map.component';

describe('MobileMapComponent', () => {
  let component: MobileMapComponent;
  let fixture: ComponentFixture<MobileMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
