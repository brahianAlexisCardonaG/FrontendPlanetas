import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDeleteComponent } from './planet-delete.component';

describe('TaskDeleteComponent', () => {
  let component: PlanetDeleteComponent;
  let fixture: ComponentFixture<PlanetDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetDeleteComponent]
    });
    fixture = TestBed.createComponent(PlanetDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
