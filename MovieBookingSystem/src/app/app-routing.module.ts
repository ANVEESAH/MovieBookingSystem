import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './User/error/error.component';
const routes: Routes = [
  {path:"user",loadChildren:()=>import('./user-layout/user-layout.module').then(x=>x.UserLayoutModule)},
  {path:"admin", loadChildren:()=>import('./admin/admin.module').then(x=>x.AdminLayoutModule)},
  {path:"error", component:ErrorComponent},
  {path:"", redirectTo:"user", pathMatch:"full"},
  {path:"**", redirectTo:"error", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
