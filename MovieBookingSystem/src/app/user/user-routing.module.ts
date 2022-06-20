import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTicketComponent } from './book-ticket/book-ticket.component';


const routes: Routes = [
  {path:'buy',component:BookTicketComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
