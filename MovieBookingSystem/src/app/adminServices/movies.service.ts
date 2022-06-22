import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) { }

  GetAllMovies():Observable<any[]>{
    return this.httpClient.get<any[]>('http://localhost:3000/movies');
  }

  GetAMovieById(MovieID:any):Observable<any[]>{
    return this.httpClient.get<any[]>('http://localhost:3000/movies/' + MovieID);
  }

  UpdateMovieData(MovieID:any, NewMovieData: Object){
    return this.httpClient.put('http://localhost:3000/movies/' + MovieID, NewMovieData);
  }

  deleteAMovie(MovieID:any){
    return this.httpClient.delete('http://localhost:3000/movies/'+ MovieID);
  }

  addMovie(MovieData:any){
    return this.httpClient.post('http://localhost:3000/movies', MovieData);
  }
}
