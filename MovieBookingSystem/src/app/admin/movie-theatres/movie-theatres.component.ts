import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieTheatresService } from 'src/app/adminServices/movie-theatres.service';

@Component({
  selector: 'app-movie-theatres',
  templateUrl: './movie-theatres.component.html',
  styleUrls: ['./movie-theatres.component.css']
})
export class MovieTheatresComponent implements OnInit {
  dataArray: any[] = [];
  // products:Product[] = [];
  constructor(private _movieTheatresService: MovieTheatresService) { }

  ngOnInit(): void {
    this._movieTheatresService.GetAllMovieTheatres().subscribe(
      (data) => { this.dataArray = data }
    );
    // this.products=this.productService.getProducts();
  }

  deleteFunc(id: any) {
    this._movieTheatresService.deleteATheatre(id).subscribe(
      (data) => {
        this.dataArray.pop();
      }
    );
  }

  addTheatreForm = new FormGroup(
    {
      id: new FormControl(),
      theatreName: new FormControl()
    }
  )

  addTheatreFunc() {
    if (this.addTheatreForm.valid) {
      this._movieTheatresService.addMovieTheatre(this.addTheatreForm.value).subscribe(
        (data)=>{
          this.dataArray.push(this.addTheatreForm.value);
        }
      );
    }
  }
}