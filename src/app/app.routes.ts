import { Routes } from '@angular/router';
import {RegisterComponent} from './users/register/register.component';
import {ListComponent} from './users/list/list.component';
import {HomeComponent} from './exp/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/list', component: ListComponent },
  { path: '**', redirectTo: '' }
];
