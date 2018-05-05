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
  constructor() { }

  ngOnInit() {
  }

  getValor() {
    return 4;
  }

  getJoinha() {
    return true;
  }

}
