import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    birthday: new Date(1993, 5, 1)
  };

  isToggle = true;

  get format() {
    return this.isToggle ? 'yyyy年MM月dd日' : 'yyyy-MM-dd';
  }

  toggleFormat() {
    this.isToggle = !this.isToggle;
  }

  constructor() { }

  ngOnInit() {
  }

}
