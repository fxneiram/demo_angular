import { Component } from '@angular/core';
import {DtoUser, UsersService} from '../../core/modules/openapi';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user: DtoUser = {} as DtoUser;

  constructor(private usersService: UsersService) {}

  onSubmit() {
    this.usersService.apiV1UsersPost("123456789", this.user).subscribe((data: DtoUser) => {
      console.log(data);
    });
  }
}
