import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSetupComponent } from './map-setup.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MapSetupComponent', () => {
  let component: MapSetupComponent;
  let fixture: ComponentFixture<MapSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [MapSetupComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
