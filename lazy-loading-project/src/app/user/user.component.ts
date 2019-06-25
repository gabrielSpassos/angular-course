import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: User;
  public users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.users = this.userService.getUsers();
  }

}
