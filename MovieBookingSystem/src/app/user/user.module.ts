import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ContentComponent } from './content/content.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    ContentComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
