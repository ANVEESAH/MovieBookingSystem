import {  Routes } from '@angular/router';

import { BookTicketComponent } from '../User/book-ticket/book-ticket.component';
import { ContentComponent } from '../User/content/content.component';
import { ErrorComponent } from '../User/error/error.component';
import { HomeComponent } from '../User/home/home.component';
import { SigninComponent } from '../User/signin/signin.component';
import { StepperComponent } from '../User/stepper/stepper.component';

import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'stepper',component: StepperComponent},
  {path:'header',component: HeaderComponent},
  {path:'',component: HomeComponent},
  {path:'buy',component: BookTicketComponent},
 
  {path:'home',component: HomeComponent},
  {path:'content',component: ContentComponent},
  {path:'error',component: ErrorComponent},
  {path:'signin',component: SigninComponent}
  
  
];


export {routes}