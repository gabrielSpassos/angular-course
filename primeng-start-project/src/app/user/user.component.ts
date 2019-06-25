import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    let user;
    this.userService.getUsers().subscribe(
      response => {
        response.forEach(
          usuario => {
            user = UserService.buildUser(usuario);
            this.users.push(user);
          }
        )
      },
      error => {
        alert(error)
      }
    );
  }

  public deleteUser(id:string) {
    this.userService.deleteUser(id).subscribe(
      r => {
        this.userService.getUsers()
      }
    )
  }
}
