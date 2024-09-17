import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // users: User[] = [
  //   new User('srk','male','yearly', 'active'),
  //   new User('tsv','male','yearly', 'active'),
  //   new User('mathi','male','yearly', 'active')
  // ]

  users: User[] = [
    {name:'srk', gender: 'male', plan: 'yearly', status: 'active'},
    {name: 'tsv', gender: 'female', plan: 'yearly', status: 'active'},
    {name: 'mathi', gender: 'female', plan: 'yearly', status: 'active'}
  ]

  onShowUserDetailClicked: EventEmitter<User> = new EventEmitter<User>();

  onShowUserDetail(user: User) {
    this.onShowUserDetailClicked.emit(user)
  }



  getAllUser() {
    return this.users;
  }

  createUser(user: User) {
    // name: string, gender: string, plan: string, status: string
    // let user = new User(name, gender,plan,status )

    this.users.push(user);
  }
}
