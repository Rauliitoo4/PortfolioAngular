import { Injectable, signal, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode = signal(false);
  isDarkMode = this.darkMode.asReadonly();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('darkMode');
      if (saved) {
        this.darkMode.set(JSON.parse(saved));
      }
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.darkMode.set(!this.darkMode());
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('dark-mode', JSON.stringify(this.darkMode()));
      this.applyTheme();
    }
  }

  private applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.darkMode()) {
        document.documentElement.classList.add('dark-theme');
      } else {

        document.documentElement.classList.remove('dark-theme');
      }
    }
  }
}
