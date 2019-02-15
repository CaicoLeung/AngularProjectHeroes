import { Component, OnInit } from '@angular/core';

import { Hero } from '../Hero';
import { HeroService } from "../hero.service";
// import { MessageService } from "../message.service";

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

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
    // this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
  }

}
