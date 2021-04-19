import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderingPointsComponent } from './rendering-points.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RenderingPointsComponent', () => {
  let component: RenderingPointsComponent;
  let fixture: ComponentFixture<RenderingPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [RenderingPointsComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderingPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
