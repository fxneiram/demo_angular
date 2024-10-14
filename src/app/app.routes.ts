import { Routes } from '@angular/router';
import {RegisterComponent} from './users/register/register.component';
import {ListComponent} from './users/list/list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/users/list', pathMatch: 'full' },
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/list', component: ListComponent },
  { path: '**', redirectTo: '/users/list' }
];
