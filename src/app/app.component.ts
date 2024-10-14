import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DtoSearchUsersResponse, DtoUser, UsersService } from './core/modules/openapi';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common'; // <-- Importar aquí
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  providers: [UsersService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'User Service';

  users: DtoUser[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.apiV1UsersGet("123456789").subscribe((data: DtoSearchUsersResponse) => {
      this.users = data.result || [];
    });
  }
}
