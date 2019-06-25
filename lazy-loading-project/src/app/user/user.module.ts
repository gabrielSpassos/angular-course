import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from "./user.component";
import {UserRoutingModule} from "./user.routing.module";
import {UserRegisterComponent} from "./register/user-register.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [UserComponent, UserRegisterComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
