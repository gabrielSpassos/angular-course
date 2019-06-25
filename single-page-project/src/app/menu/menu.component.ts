import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public text: string;

  constructor() { }

  ngOnInit() {
    this.text = 'Olá Mundo!';
  }

  onClick() {
    this.text = 'Olá Mundo, depois de clicar o botão!'
  }

}
