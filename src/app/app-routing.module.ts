import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./exp/home/home.component";
import {RegisterComponent} from "./users/register/register.component";
import {ListComponent} from "./users/list/list.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/list', component: ListComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
