import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieTheatresService } from 'src/app/adminServices/movie-theatres.service';

@Component({
  selector: 'app-edit-theatre',
  templateUrl: './edit-theatre.component.html',
  styleUrls: ['./edit-theatre.component.css']
})
export class EditTheatreComponent implements OnInit {

  constructor(private _Activatedroute: ActivatedRoute, private _router: Router, private _movieTheatresService: MovieTheatresService) { }
  id: any = 0;
  data: any;
  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.params['id'];
    this._movieTheatresService.GetAMovieTheatreById(this.id).subscribe(
      (data) => { this.data = data }
    );
  }

  newTheatreDataForm = new FormGroup({
    theatreName: new FormControl()
  })

  GotoTheatres() {
    this.submitNewTheatreDataFunc();
    this._router.navigateByUrl('/admin/movie-theatres');
  }

  submitNewTheatreDataFunc(){
    if(this.newTheatreDataForm.valid){
      this._movieTheatresService.UpdateTheatreData(this.id, this.newTheatreDataForm.value).subscribe()
    }
  }
  
}
