import { Component, inject } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  selectedUser: User;

  // constructor(private userService: UserService) {}

  userService = inject(UserService);

  ngOnInit() {
    this.userService.onShowUserDetailClicked.subscribe((data) => {
      this.selectedUser = data
    })
  }







}
