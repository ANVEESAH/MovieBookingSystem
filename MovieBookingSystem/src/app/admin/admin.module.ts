import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieTheatresComponent } from './movie-theatres/movie-theatres.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieTimingsComponent } from './movie-timings/movie-timings.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersComponent } from './users/users.component';
import { BookingComponent } from './booking/booking.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MovieTheatresComponent,
    MoviesComponent,
    MovieTimingsComponent,
    HomePageComponent,
    UsersComponent,
    BookingComponent,
    UpdatePasswordComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
