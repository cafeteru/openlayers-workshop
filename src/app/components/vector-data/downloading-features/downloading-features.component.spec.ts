import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadingFeaturesComponent } from './downloading-features.component';

describe('DownloadingFeaturesComponent', () => {
  let component: DownloadingFeaturesComponent;
  let fixture: ComponentFixture<DownloadingFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadingFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadingFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
