import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {BASE_PATH, DtoSearchUsersResponse, DtoUser, UsersService} from './core/modules/openapi';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { NavComponent } from './exp/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule, NavComponent],
  providers: [UsersService, {provide: BASE_PATH, useValue: environment.apiUrl}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Demo User Service';


  constructor() {}


}
