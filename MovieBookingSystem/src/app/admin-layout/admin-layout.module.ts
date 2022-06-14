import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './admin-layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';

const routing:Routes=[
  {path:'', component:LayoutComponent, children : routes}
]

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routing)
  ]
})
export class AdminLayoutModule { }
