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

  add(name: string):void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({name} as Hero).subscribe(hero => {
      this.heroes.push(hero);
    })
  }

  delete(hero: Hero):void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    this.getHeroes();
  }

}
