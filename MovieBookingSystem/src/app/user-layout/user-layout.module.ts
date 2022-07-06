import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { routes } from './user-layout-routing.module';
import { BookTicketComponent } from '../user/book-ticket/book-ticket.component';

import { ErrorComponent } from '../user/error/error.component';
import { HomeComponent } from '../user/home/home.component';
import { StepperComponent } from '../user/stepper/stepper.component';
import { SigninComponent } from '../user/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from '../user/content/content.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


const routing:Routes=[
  {path:'',component:HeaderComponent,children:routes},
  
]

@NgModule({
  declarations: [HeaderComponent,BookTicketComponent,ContentComponent,ErrorComponent,HomeComponent,StepperComponent,SigninComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routing),
    FormsModule, ReactiveFormsModule,HttpClientModule

  ]
})
export class UserLayoutModule { }
