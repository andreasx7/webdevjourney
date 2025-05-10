import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-template',
  templateUrl: './cmp-template.component.html',
  styleUrl: './cmp-template.component.scss'
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
    }

  }
}
