import { Component, OnInit } from '@angular/core';

import {CursosService} from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  blogGabriel: string;
  cursos: string[];

  constructor(private cursosService: CursosService) { 
    this.blogGabriel = 'https://blogcoreengineering.wordpress.com/';

    var service = new CursosService();

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
