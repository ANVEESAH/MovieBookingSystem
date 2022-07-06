import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieTheatresComponent } from './movie-theatres/movie-theatres.component';
import { MovieTimingsComponent } from './movie-timings/movie-timings.component';
import { MoviesComponent } from './movies/movies.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UsersComponent } from './users/users.component';
import { LayoutComponent } from './layout/layout.component';
import { EditTheatreComponent } from './edit-theatre/edit-theatre.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  {path:"layout", component:LayoutComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"movie-theatres", component:MovieTheatresComponent},
  {path:"movies", component:MoviesComponent},
  {path:"movie-timings", component:MovieTimingsComponent},
  {path:"home-page", component:HomePageComponent},
  {path:"users", component:UsersComponent},
  {path:"booking", component:BookingComponent},
  {path:"update-password", component:UpdatePasswordComponent},
  {path:"edit-theatre/:id", component:EditTheatreComponent},
  {path:"edit-movie/:id", component:EditMovieComponent},
  {path:"add-movie", component:AddMovieComponent},
  {path:"", redirectTo:"dashboard", pathMatch:"full"}
];
export { routes }