import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from '../admin/booking/booking.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { HomePageComponent } from '../admin/home-page/home-page.component';
import { MovieTheatresComponent } from '../admin/movie-theatres/movie-theatres.component';
import { MovieTimingsComponent } from '../admin/movie-timings/movie-timings.component';
import { MoviesComponent } from '../admin/movies/movies.component';
import { UpdatePasswordComponent } from '../admin/update-password/update-password.component';
import { UsersComponent } from '../admin/users/users.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path:"layout", component:LayoutComponent},
  
  {path:"", component:DashboardComponent},
  {path:"movie-theatres", component:MovieTheatresComponent},
  {path:"movies", component:MoviesComponent},
  {path:"movie-timings", component:MovieTimingsComponent},
  {path:"home-page", component:HomePageComponent},
  {path:"users", component:UsersComponent},
  {path:"booking", component:BookingComponent},
  {path:"update-password", component:UpdatePasswordComponent}
];
export { routes }