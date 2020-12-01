import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService,Heroe } from '../../service/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
  styleUrls: ['./search-heroe.component.css']
})
export class SearchHeroeComponent implements OnInit {


  heroe:any[]=[];

  constructor(private _heroeService:HeroesService ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      console.log(params['termino']);
      this.heroe = this._heroeService.buscarHeroes(params['termino']);
    });
  
  }

}
