import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  name: string
  gender: string
  plan: string
  status: string

  constructor(private userService: UserService) {}

  createUser() {
    const userPayload = {
      name: this.name,
      gender: this.gender,
      plan: this.plan,
      status: this.status
    }
    console.log("payload", userPayload);

    this.userService.createUser(userPayload)
    console.log(this.userService.users);

  }


}
