import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTheatresComponent } from './movie-theatres.component';

describe('MovieTheatresComponent', () => {
  let component: MovieTheatresComponent;
  let fixture: ComponentFixture<MovieTheatresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTheatresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTheatresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
