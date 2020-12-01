import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { RouterModule,Routes } from '@angular/router';
import {HeroesService} from './service/heroes.service';
import { HeroeComponent } from './component/heroe/heroe.component'

const appRoutes:Routes =[
  {path:'',pathMatch:'full',redirectTo:'/home'},
 
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'heroes',component:HeroesComponent},
  {path:'heroe/:id',component:HeroeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
