import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService,Heroe } from '../../service/heroes.service';

HeroesService
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

heroes:Heroe[]=[];


  constructor(private _heroesService:HeroesService,
              private router:Router) { }

  ngOnInit(): void {

  this.heroes = this._heroesService.getHeroes();


  }

  
  verHeroe(i:number){
    this.router.navigate(['/heroe',i])
  }

}
