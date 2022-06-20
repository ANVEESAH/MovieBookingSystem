import {  Routes } from '@angular/router';
import { BookTicketComponent } from '../user/book-ticket/book-ticket.component';
import { ContentComponent } from '../user/content/content.component';
import { ErrorComponent } from '../user/error/error.component';
import { HomeComponent } from '../user/home/home.component';
import { SigninComponent } from '../user/signin/signin.component';
import { StepperComponent } from '../user/stepper/stepper.component';

import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'stepper',component: StepperComponent},
  {path:'header',component: HeaderComponent},
  {path:'',component: HomeComponent},
  {path:'buy',component: BookTicketComponent},
 
  {path:'home',component: HomeComponent},
  {path:'content',component: ContentComponent},
  {path:'error',component: ErrorComponent},
  {path:'signin',component: SigninComponent},
  
];


export {routes}