import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users = 25;
  theatres = 2;
  movies = 1;
  bookings = 102;
  constructor() { }

  ngOnInit(): void {
  }

}
