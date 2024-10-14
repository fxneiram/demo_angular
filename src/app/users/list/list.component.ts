import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {NgForOf} from "@angular/common";
import {DtoSearchUsersResponse, DtoUser, UsersService} from '../../core/modules/openapi';

@Component({
  selector: 'app-list',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  users: DtoUser[] = [];
  total: number | undefined;

  constructor(private usersService: UsersService, private router: Router) {}

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
