import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WebDevJourney';
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
