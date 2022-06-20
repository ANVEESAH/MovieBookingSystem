// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { AdminRoutingModule } from './admin-routing.module';
// import { BookingComponent } from './booking/booking.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HomePageComponent } from './home-page/home-page.component';
// import { MovieTheatresComponent } from './movie-theatres/movie-theatres.component';
// import { MovieTimingsComponent } from './movie-timings/movie-timings.component';
// import { MoviesComponent } from './movies/movies.component';
// import { UpdatePasswordComponent } from './update-password/update-password.component';
// import { UsersComponent } from './users/users.component';
// import { EditTheatreComponent } from './edit-theatre/edit-theatre.component';
// import { LayoutComponent } from './layout/layout.component';
// import { ErrorComponent } from './error/error.component';


// @NgModule({
//   declarations: [
//     BookingComponent,
//     DashboardComponent,
//     HomePageComponent,
//     MovieTheatresComponent,
//     MovieTimingsComponent,
//     MoviesComponent,
//     UpdatePasswordComponent,
//     UsersComponent,
//     EditTheatreComponent,
//     LayoutComponent,
//     ErrorComponent
//   ],
//   imports: [
//     CommonModule,
//     AdminRoutingModule
//   ]
// })
// export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { EditTheatreComponent } from './edit-theatre/edit-theatre.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieTheatresComponent } from './movie-theatres/movie-theatres.component';
import { MovieTimingsComponent } from './movie-timings/movie-timings.component';
import { MoviesComponent } from './movies/movies.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule} from '@angular/common/http';

const routing:Routes=[
  {path:'', component:LayoutComponent, children : routes},
  {path:'**', component:ErrorComponent, pathMatch:"full", children : routes}
]

@NgModule({
  declarations: [
    LayoutComponent,
    ErrorComponent,
    DashboardComponent,
    EditTheatreComponent,
    BookingComponent,
    HomePageComponent,
    MovieTheatresComponent,
    MovieTimingsComponent,
    MoviesComponent,
    UpdatePasswordComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routing),
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminLayoutModule { }

