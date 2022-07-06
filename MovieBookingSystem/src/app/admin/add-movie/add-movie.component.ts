import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/adminServices/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private _moviesService: MoviesService, private _router: Router) { }

  id: any = 0;
  movieData: any;
  // fileToUpload: File | null = null;
  fileName = '';
  localUrl: any[] = [];

  ngOnInit(): void { }

  editMovieDataForm = new FormGroup({
    id: new FormControl('', Validators.required),
    movieName: new FormControl('', Validators.required),
    trailer: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-?]*/?')]),
    movieDetails: new FormControl('', Validators.required),
    movieCast: new FormControl('', Validators.required),
    movieFacts: new FormControl('', Validators.required),
    IMDBRating: new FormControl('', [Validators.required, Validators.max(10), Validators.pattern("^[0-9.]*$")]),
    moviePoster: new FormControl('')
  })

  GotoMovies() {
    this.submitNewMovieDataFunc();
    this._router.navigateByUrl('/admin/movies');
  }

  submitNewMovieDataFunc() {
    if (this.editMovieDataForm.valid) {
      this._moviesService.addMovie(this.editMovieDataForm.value).subscribe()
    }
  }

  onFileSelect(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.localUrl;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
