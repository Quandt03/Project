import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserlistComponent} from './userlist/userlist.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

const routes: Routes = [
  { path: 'userlist', component: UserlistComponent },
  { path: 'createuser', component: CreateuserComponent },
  { path: 'edituser', component: EdituserComponent },
  { path: 'userdetail', component: UserdetailComponent },
  { path: '', redirectTo: '/userlist', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
