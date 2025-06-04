import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent{

  
  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(){
   
    }
  
  navigateTo(project:any){
    switch(project){
      case 1: 
        window.open('https://boss.webdevjourney.site', '_blank');
        break;
      case 2: 
        window.open('https://pilotta.webdevjourney.site', '_blank');
        break;
      case 3: 
        window.open('https://dasproject.webdevjourney.site', '_blank');
        break;
      case 4: 
        window.open('https://whatthepost.webdevjourney.site', '_blank');
        break;
    }

  }
}
