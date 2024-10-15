import {Component, ViewChild} from '@angular/core';
import {DtoUser, UsersService} from '../../core/modules/openapi';
import {FormsModule} from '@angular/forms';
import {AlertComponent} from '../../exp/alert/alert.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    AlertComponent
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: DtoUser = {} as DtoUser;

  @ViewChild(AlertComponent) alertComponent!: AlertComponent;


  constructor(private usersService: UsersService) {}

  onSubmit() {
    this.usersService.apiV1UsersPost("123456789", this.user).subscribe(
      (data: DtoUser) => {
        this.alertComponent.success('Success!', 'User registered successfully.');
        console.log(data);
      },
      (error) => {
        this.alertComponent.danger('Error!', 'An error occurred while registering the user.');
        console.error(error);
      }
    );
  }
}
