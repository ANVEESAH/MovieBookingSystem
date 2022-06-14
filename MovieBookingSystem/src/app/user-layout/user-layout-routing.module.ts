import {  Routes } from '@angular/router';
import { ContentComponent } from '../user/content/content.component';
import { ErrorComponent } from '../user/error/error.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'header',component: HeaderComponent},
  {path:'',component: HeaderComponent},
  {path:'content',component: ContentComponent},
  {path:'error',component: ErrorComponent},
  {path:'**',component: ErrorComponent
  }
];


export {routes}