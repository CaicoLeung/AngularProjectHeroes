import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  @Input() isToggle;

  constructor() { }

  ngOnInit() {
  }

  get format() {
    return this.isToggle ? 'yyyy年MM月dd日' : 'yyyy-MM-dd';
  }

}
