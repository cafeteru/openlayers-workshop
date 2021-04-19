import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveComponent } from './interactive.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InteractiveComponent', () => {
  let component: InteractiveComponent;
  let fixture: ComponentFixture<InteractiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [InteractiveComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
