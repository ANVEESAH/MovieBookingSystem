import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  data: any;
  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.params['id'];
    this._moviesService.GetAMovieById(this.id).subscribe(
      (data) => { this.data = data }
    );
  }

  newMovieDataForm = new FormGroup({
    movieName: new FormControl(),
    trailer: new FormControl()
  })

  submitNewMovieDataFunc(){
    if(this.newMovieDataForm.valid){
      this._moviesService.UpdateMovieData(this.id, this.newMovieDataForm.value).subscribe()
    }
  }

}
