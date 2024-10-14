import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BASE_PATH, DtoSearchUsersResponse, DtoUser, UsersService} from './core/modules/openapi';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  providers: [UsersService, {provide: BASE_PATH, useValue: environment.apiUrl}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Demo User Service';

  users: DtoUser[] = [];
  total: number | undefined;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.apiV1UsersGet("123456789").subscribe((data: DtoSearchUsersResponse) => {
      this.users = data.result || [];
      this.total = data.total || 0;
    });
  }
}
