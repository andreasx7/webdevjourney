import { Component, Input } from '@angular/core';



@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'] 
})
export class ToolbarComponent{

  
  constructor(
  ) {
  }

  isDarkMode = false;

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('dark-mode', String(isDark));
    this.isDarkMode = localStorage.getItem('dark-mode') === 'true';
  } 
  
  ngOnInit(): void {
    this.isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
    }
    else{
      document.body.classList.remove('dark-theme');
    }
  }
  
}
