import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFullScreenComponent } from './map-full-screen.component';

describe('MapFullScreenComponent', () => {
  let component: MapFullScreenComponent;
  let fixture: ComponentFixture<MapFullScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapFullScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
