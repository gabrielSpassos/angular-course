import { Component, OnInit } from '@angular/core';
import {StatesService} from "../states.service";

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  states: any;

  constructor(private statesService: StatesService) { }

  ngOnInit() {
    this.statesService.getStates().subscribe(
      response => {
        this.states = response;
      }
    )
  }

}
