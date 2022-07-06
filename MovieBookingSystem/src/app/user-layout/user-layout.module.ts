import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { routes } from './user-layout-routing.module';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BookTicketComponent } from '../User/book-ticket/book-ticket.component';
import { ContentComponent } from '../User/content/content.component';
import { ErrorComponent } from '../User/error/error.component';
import { HomeComponent } from '../User/home/home.component';
import { StepperComponent } from '../User/stepper/stepper.component';
import { SigninComponent } from '../User/signin/signin.component';



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
