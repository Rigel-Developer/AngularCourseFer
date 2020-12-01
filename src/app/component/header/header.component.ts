import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }




  buscarHeroe(termino:string){
    //console.log(termino)
    this.router.navigate(['/heroeSearch',termino])
  }

/*
  verHeroe(term:string){
    this.router.navigate(['/heroeSearch',term])
  }*/


}
