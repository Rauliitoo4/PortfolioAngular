import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode = signal(false);
  isDarkMode = this.darkMode.asReadonly();

  constructor() { 
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      this.darkMode.set(JSON.parse(saved));
    }
    this.applyTheme();
  }

  toggleTheme() {
    this.darkMode.set(!this.darkMode());
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    this.applyTheme();
  }

  private applyTheme() {
    document.body.classList.toggle('dark-theme', this.darkMode());
  }
}
