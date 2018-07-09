import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, stagger, keyframes } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ ]
})

export class HomeComponent implements OnInit {

  itemCount:number;
  btnText: string = 'Add an item';
  goalText: string = 'My first goal';
  goals = ['my first goal', 'i want to climb a mountain.', 'my third goal'];

  constructor() { }

  ngOnInit () {
    this.itemCount = this.goals.length;
  }

  addItem () {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

  removeItem (i) {
    this.goals.splice(i, 1);
  }

}