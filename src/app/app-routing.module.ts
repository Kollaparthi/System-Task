import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdduserComponent } from './adduser/adduser.component';
import { TablelistComponent } from './tablelist/tablelist.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'login', component: LoginComponent},
    {path: '', component:  AdduserComponent },
    {path: 'tablelist', component:  TablelistComponent },


  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
