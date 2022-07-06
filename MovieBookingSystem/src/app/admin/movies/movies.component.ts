import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesService } from 'src/app/adminServices/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  dataArray: any[] = [];
  constructor(private _moviesService: MoviesService) { }

  ngOnInit(): void {
    this._moviesService.GetAllMovies().subscribe(
      (data) => { this.dataArray = data; }
    );
  }

  deleteFunc(id: any) {
    this._moviesService.deleteAMovie(id).subscribe(
      (data) => {
        this.dataArray.pop();
      }
    );
  }

  // addMovieForm = new FormGroup(
  //   {
  //     id: new FormControl(),
  //     movieName: new FormControl(),
  //     moviePoster: new FormControl(),
  //     trailer: new FormControl()
  //   }
  // )

  // addMovieFunc() {
  //   if (this.addMovieForm.valid) {
  //     this._moviesService.addMovie(this.addMovieForm.value).subscribe(
  //       (data)=>{
  //         this.dataArray.push(this.addMovieForm.value);
  //       }
  //     );
  //   }
  // }
}
