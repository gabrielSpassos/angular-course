import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {UserService} from "../../user.service";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['../user.component.css']
})
export class UserRegisterComponent implements OnInit {

  public user: User = new User();

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  public saveUser() {
    this.userService.save(UserService.buildUsuario(this.user)).subscribe(
      response => {
        console.log('Salvo com sucesso ', response)
      }
    );
  }
}
