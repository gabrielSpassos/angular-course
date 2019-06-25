import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        items: [{
          label: 'New',
          icon: 'pi pi-fw home',
          routerLink: 'home'
        }]
      },
      {
        label: 'User',
        icon: 'pi pi-fw pi-user',
        routerLink: 'user'
      }
    ];
  }

}
