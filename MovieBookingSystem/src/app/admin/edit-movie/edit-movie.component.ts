import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/adminServices/movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  // private _router: Router
  constructor(private _Activatedroute: ActivatedRoute, private _moviesService: MoviesService, private _router: Router) { }

  id: any = 0;
  movieData: any;
  // fileToUpload: File | null = null;
  fileName = '';
  localUrl: any[] = [];

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.params['id'];
    this._moviesService.GetAMovieById(this.id).subscribe(
      (data) => {
        this.editMovieFunc(data),
          this.movieData = data
      }
    );
  }

  newMovieDataForm = new FormGroup({
    movieName: new FormControl('', Validators.required),
    trailer: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-?]*/?')]),
    movieDetails: new FormControl('', Validators.required),
    movieCast: new FormControl('', Validators.required),
    movieFacts: new FormControl('', Validators.required),
    IMDBRating: new FormControl('', [Validators.required, Validators.max(10), Validators.pattern("^[0-9.]*$")]),
    moviePoster: new FormControl('')
  })

  editMovieFunc(aMovieDetail: any) {
    this.newMovieDataForm.patchValue({
      movieName: aMovieDetail.movieName,
      trailer: aMovieDetail.trailer,
      movieDetails: aMovieDetail.movieDetails,
      movieCast: aMovieDetail.movieCast,
      movieFacts: aMovieDetail.movieFacts,
      IMDBRating: aMovieDetail.IMDBRating
    })
  }

  GotoMovies() {
    // this.onUpload()
    this.submitNewMovieDataFunc();
    this._router.navigateByUrl('/admin/movies');
  }

  submitNewMovieDataFunc() {
    this.loading = !this.loading;
    console.log(this.file);
    if (this.newMovieDataForm.valid) {
      this._moviesService.UpdateMovieData(this.id, this.newMovieDataForm.value, this.file).subscribe(
        (event: any) => {
          if (typeof (event) === 'object') {
  
            // Short link via api response
            this.shortLink = event.link;
  
            this.loading = false; // Flag variable 
          }
        }
      )
    }
  }

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null!; // Variable to store file

  // On file Select
  onChange(event: any) {
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  // onUpload() {
  //   this.loading = !this.loading;
  //   console.log(this.file);
  //   this._moviesService.upload(this.file).subscribe(
  //     (event: any) => {
  //       if (typeof (event) === 'object') {

  //         // Short link via api response
  //         this.shortLink = event.link;

  //         this.loading = false; // Flag variable 
  //       }
  //     }
  //   );
  // }

  // onFileSelect(event: any) {
  //   console.log(event);
    // if (event.target.files) {
    // var reader = new FileReader();
    // reader.onload = (event: any) => {
    //   console.log(reader);
      // this.localUrl = event.target.localUrl;
      // }
      // reader.readAsDataURL(event.target.files[0]);
  //   }
  // }

}
