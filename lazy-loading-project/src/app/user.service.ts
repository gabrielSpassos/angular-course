import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser(): User {
    let user = new User();
    user.name = 'Gabriel';
    user.email = 'gabriel@gmail.com';
    return user;
  }

  public getUsers(): User[] {
    return [
      {
        name: "Gabriel",
        email: "gabriel@gmail.com",
      },
      {
        name: "Maria",
        email: "maria@gmail.com",
      },
      {
        name: "Lucas",
        email: "lucas@gmail.com",
      },
      {
        name: "Fernanda",
        email: "fernanda@gmail.com",
      },
    ];
  }
}
