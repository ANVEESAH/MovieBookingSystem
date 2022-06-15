import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './admin-layout/error/error.component';

const routes: Routes = [
  {path:"admin", loadChildren:()=>import('./admin-layout/admin-layout.module').then(x=>x.AdminLayoutModule)},
  {path:"error", component:ErrorComponent},
  {path:"", redirectTo:"admin", pathMatch:"full"},
  {path:"**", redirectTo:"error", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
