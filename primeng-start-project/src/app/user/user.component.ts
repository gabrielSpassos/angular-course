import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ConfirmationService]
})
export class UserComponent implements OnInit {

  public users = [];

  constructor(private userService: UserService, private confirmationService:ConfirmationService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.users = [];
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
    this.confirmationService.confirm({
      message: 'Você tem certeza que quer deletar esse usuário?',
      accept: () => {
        this.userService.deleteUser(id).subscribe(
          r => {
            this.getUsers()
          }
        )
      }
    });
  }
}
