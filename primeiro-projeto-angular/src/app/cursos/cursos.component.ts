import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  blogGabriel: string;
  cursos: string[] = ['MySql', 'Git', 'Java', 'Angular'];

  constructor() { 
    this.blogGabriel = 'https://blogcoreengineering.wordpress.com/';
  }

  ngOnInit() {
  }

}
