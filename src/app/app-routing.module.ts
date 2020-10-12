import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomdirectiveComponent } from './customdirective/customdirective.component';
import { ListComponent } from './list/list.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';



const routes: Routes = [
  {
    path:'registrationform',
    component:RegistrationformComponent
  },

  {
    path:'list',
    component:ListComponent
  },

  {
    path:'directive',
    component:CustomdirectiveComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
