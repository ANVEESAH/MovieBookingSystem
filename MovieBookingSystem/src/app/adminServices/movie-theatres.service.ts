import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatresService {

  constructor(private httpClient:HttpClient) { }

  GetAllMovieTheatres():Observable<any[]>{
    return this.httpClient.get<any[]>('http://localhost:3000/movie-theatres');
  }
}
