import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgForOf} from "@angular/common";
import {DtoSearchUsersResponse, DtoUser, UsersService} from '../../core/modules/openapi';

@Component({
  selector: 'app-list',
  standalone: true,
    imports: [
        NgForOf,
        HttpClientModule
    ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  users: DtoUser[] = [];
  total: number | undefined;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    console.log('ngOnInit executed');
  }

  ngAfterViewInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.apiV1UsersGet("123456789").subscribe((data: DtoSearchUsersResponse) => {
      this.users = data.result || [];
      this.total = data.total || 0;
    });
  }
}
