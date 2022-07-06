import { TestBed } from '@angular/core/testing';

import { MovieTheatresService } from './movie-theatres.service';

describe('MovieTheatresService', () => {
  let service: MovieTheatresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieTheatresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
