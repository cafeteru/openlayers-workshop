import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxComponent } from './mapbox.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MapboxComponent', () => {
  let component: MapboxComponent;
  let fixture: ComponentFixture<MapboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [MapboxComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
