import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from "./user.component";
import {UserRoutingModule} from "./user.routing.module";
import {UserRegisterComponent} from "./register/user-register.component";
import {FormsModule} from "@angular/forms";
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [UserComponent, UserRegisterComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule
  ]
})
export class UserModule { }
