import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  GetAllMovies(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/movies');
  }

  GetAMovieById(MovieID: any): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/movies/' + MovieID);
  }

  UpdateMovieData(MovieID: any, NewMovieData: any, file: File) {
    // Create form data
    const formData = new FormData(); 
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
    formData.append("NewMovieData", NewMovieData)
    return this.httpClient.put('http://localhost:3000/movies/' + MovieID, formData);
  }

  deleteAMovie(MovieID: any) {
    return this.httpClient.delete('http://localhost:3000/movies/' + MovieID);
  }

  addMovie(MovieData: any) {
    return this.httpClient.post('http://localhost:3000/movies', MovieData);
  }


  // postFile(MovieID: any, file:File): Observable<any> {
  //   const endpoint = 'assets\\Images\\admin\\adminMovies';
  //   const formData = new FormData();
  //   formData.append("thumbnail", file);
  //   // formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   return this.httpClient.put("http://localhost:3000/movies/" + MovieID, formData);
  // }



  //   postFile(fileToUpload: File): Observable<boolean> {
  //     const endpoint = 'assets\\Images\\admin\\adminMovies';
  //     const formData: FormData = new FormData();
  //     formData.append('fileKey', fileToUpload, fileToUpload.name);
  //     return this.httpClient
  //       .post(endpoint, formData, { headers: yourHeadersConfig })
  //       .map(() => { return true; })
  //       .catch((e) => this.handleError(e));
  // }
}
