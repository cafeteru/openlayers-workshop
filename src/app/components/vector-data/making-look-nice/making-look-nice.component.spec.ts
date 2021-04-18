import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingLookNiceComponent } from './making-look-nice.component';

describe('MakingLookNiceComponent', () => {
  let component: MakingLookNiceComponent;
  let fixture: ComponentFixture<MakingLookNiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakingLookNiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingLookNiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
