import { Component, OnInit } from '@angular/core';
import {User} from "../../user";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['../user.component.css']
})
export class UserRegisterComponent implements OnInit {

  public user: User = new User();

  constructor() { }

  ngOnInit() {
  }

  public saveUser() {
    console.log(this.user);
    alert("Salvo");
  }
}
