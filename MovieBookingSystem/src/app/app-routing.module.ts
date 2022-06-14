import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"admin", loadChildren:()=>import('./admin-layout/admin-layout.module').then(x=>x.AdminLayoutModule)},
  // ,{path:"", redirectTo:"admin-layout", pathMatch:"full"}
  {
    path:'',loadChildren:()=>import('./user-layout/user-layout.module').then(x=>x.UserLayoutModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
