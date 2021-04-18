import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderJsonComponent } from './render-json.component';

describe('RenderJsonComponent', () => {
  let component: RenderJsonComponent;
  let fixture: ComponentFixture<RenderJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
