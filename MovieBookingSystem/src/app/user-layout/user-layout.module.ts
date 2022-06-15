import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { routes } from './user-layout-routing.module';

const routing:Routes=[
  {path:'',component:HeaderComponent,children:routes}
]

@NgModule({
  declarations: [HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routing)
  ]
})
export class UserLayoutModule { }
