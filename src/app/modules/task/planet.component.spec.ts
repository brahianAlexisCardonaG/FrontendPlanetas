import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetComponent } from './planet.component';

describe('TaskComponent', () => {
  let component: PlanetComponent;
  let fixture: ComponentFixture<PlanetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [PlanetComponent]
});
    fixture = TestBed.createComponent(PlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
