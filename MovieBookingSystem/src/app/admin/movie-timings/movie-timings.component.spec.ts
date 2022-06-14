import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTimingsComponent } from './movie-timings.component';

describe('MovieTimingsComponent', () => {
  let component: MovieTimingsComponent;
  let fixture: ComponentFixture<MovieTimingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTimingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
