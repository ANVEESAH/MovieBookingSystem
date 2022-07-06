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

  GetAMovieTheatreById(MovieTheatreID:any):Observable<any[]>{
    return this.httpClient.get<any[]>('http://localhost:3000/movie-theatres/' + MovieTheatreID);
  }

  UpdateTheatreData(MovieTheatreID:any, NewMovieTheatreData: Object){
    return this.httpClient.put('http://localhost:3000/movie-theatres/' + MovieTheatreID, NewMovieTheatreData);
  }

  deleteATheatre(MovieTheatreID:any){
    return this.httpClient.delete('http://localhost:3000/movie-theatres/'+ MovieTheatreID);
  }

  addMovieTheatre(MovieTheatreData:any){
    return this.httpClient.post('http://localhost:3000/movie-theatres', MovieTheatreData);
  }
}
