import {  Routes } from '@angular/router';
import { BookTicketComponent } from '../user/book-ticket/book-ticket.component';
import { ContentComponent } from '../user/content/content.component';
import { ErrorComponent } from '../user/error/error.component';
import { HomeComponent } from '../user/home/home.component';

import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'header',component: HeaderComponent},
  {path:'',component: HomeComponent},
  {path:'bookticket',component: BookTicketComponent}
 
  {path:'home',component: HomeComponent},
  {path:'content',component: ContentComponent},
  {path:'error',component: ErrorComponent},
  
];


export {routes}