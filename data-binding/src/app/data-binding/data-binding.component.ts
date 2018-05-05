import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://github.com/gabrielSpassos';
  cursoAngular: boolean = true;
  imageUrl: string = 'http://ottawadogfestival.ca/wp-content/uploads/2016/06/Pierre.jpg';
  value: string = '';
  valorSalvo;
  isMouseOver: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getValor() {
    return 4;
  }

  getJoinha() {
    return true;
  }

  onClick() {
    console.log("Clicado");
    alert("Click!")
  }

  onKeyUp(evento: KeyboardEvent) {
    this.value = (<HTMLInputElement>evento.target).value;
  }

  saveValue(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
