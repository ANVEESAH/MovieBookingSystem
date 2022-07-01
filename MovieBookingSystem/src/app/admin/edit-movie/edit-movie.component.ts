import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/adminServices/movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  // private _router: Router
  constructor(private _Activatedroute: ActivatedRoute, private _moviesService: MoviesService) { }
  id: any = 0;
  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.params['id'];
    this._moviesService.GetAMovieById(this.id).subscribe(
      (data) => { this.editMovieFunc(data) }
    );
  }

  newMovieDataForm = new FormGroup({
    movieName: new FormControl('', Validators.required),
    trailer: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    movieDetails: new FormControl('', Validators.required),
    movieCast: new FormControl('', Validators.required),
    movieFacts: new FormControl('', Validators.required),
    IMDBRating: new FormControl('', [Validators.required, Validators.max(10), Validators.pattern("^[0-9]*$")])
  })

  editMovieFunc(aMovieDetail:any){
    this.newMovieDataForm.patchValue({
      movieName: aMovieDetail.movieName,
      trailer: aMovieDetail.trailer,
      movieDetails: aMovieDetail.movieDetails,
      movieCast: aMovieDetail.movieCast,
      movieFacts: aMovieDetail.movieFacts,
      IMDBRating: aMovieDetail.IMDBRating
    })
  }

  submitNewMovieDataFunc(){
    if(this.newMovieDataForm.valid){
      this._moviesService.UpdateMovieData(this.id, this.newMovieDataForm.value).subscribe()
    }
  }

}
