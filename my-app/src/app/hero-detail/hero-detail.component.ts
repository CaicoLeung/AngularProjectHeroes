import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Location } from '@angular/common';

import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  @Input() isToggle;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  get format() {
    return this.isToggle ? 'yyyy年MM月dd日' : 'yyyy-MM-dd';
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => {
      this.hero = hero;
    });
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack())
  }

  goBack(): void {
    this.location.back();
  }

}
