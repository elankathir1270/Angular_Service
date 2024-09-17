import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-use-detail',
  templateUrl: './use-detail.component.html',
  styleUrls: ['./use-detail.component.css']
})
export class UseDetailComponent {

  constructor(private userService: UserService) {}

  userList: User[] = []

  ngOnInit() {
    this.userList = this.userService.getAllUser();
    console.log(this.userService.users);

  }

  showUserDetail(user: User) {
    this.userService.onShowUserDetail(user);
    console.log(user);

  }

}
