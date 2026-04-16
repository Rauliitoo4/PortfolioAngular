import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'en' | 'es' | 'de';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly availableLanguages: Language[] = ['en', 'es', 'de'];
  currentLanguage: Language = 'es';

  constructor(private translate: TranslateService) { 
    const saved = localStorage.getItem('language') as Language;
    const initial = saved || 'es';
    this.translate.addLangs(this.availableLanguages);
    this.translate.setDefaultLang('es');
    this.changeLanguage(initial);
  }

  changeLanguage(lang: Language): void {
    this.currentLanguage = lang;
    this.translate.use(lang); 
    localStorage.setItem('language', lang); 
  }

  getAvailableLanguages(): Language[] {
    return this.availableLanguages;
  }
}
