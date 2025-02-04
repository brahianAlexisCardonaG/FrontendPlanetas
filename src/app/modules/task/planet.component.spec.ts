import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComponent } from './planet.component';

describe('TaskComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageComponent]
    });
    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
