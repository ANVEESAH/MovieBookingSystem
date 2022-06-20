import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ContentComponent } from './content/content.component';
import { ErrorComponent } from './error/error.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { HomeComponent } from './home/home.component';
import { StepperComponent } from './stepper/stepper.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    ContentComponent,
    ErrorComponent,
    BookTicketComponent,
    HomeComponent,
    StepperComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule {}
