import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNotFoundComponent } from './section-not-found.component';

describe('SectionNotFoundComponent', () => {
  let component: SectionNotFoundComponent;
  let fixture: ComponentFixture<SectionNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionNotFoundComponent]
    });
    fixture = TestBed.createComponent(SectionNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
