import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { MovieTheatresService } from 'src/app/adminServices/movie-theatres.service';

@Component({
  selector: 'app-movie-theatres',
  templateUrl: './movie-theatres.component.html',
  styleUrls: ['./movie-theatres.component.css']
})
export class MovieTheatresComponent implements OnInit {
  dataArray: any[] = [];
  // constructor(private router: Router, public zone: NgZone) { }
  constructor(private _movieTheatresService: MovieTheatresService) { }

  ngOnInit(): void {
    // this.zone.run(() => { this.router.navigate(['edit-theatre']); });
    this._movieTheatresService.GetAllMovieTheatres().subscribe(
      (data) => { this.dataArray = data }
    );
  }

}