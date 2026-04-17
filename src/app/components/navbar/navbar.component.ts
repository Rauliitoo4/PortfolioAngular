import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService, Language } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';


@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatSlideToggleModule,
    TranslateModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  navItems = [
    { label: 'COMPONENTS.NAV.HOME',     icon: 'home',     route:'/'        },
    { label: 'COMPONENTS.NAV.ABOUT',    icon: 'person',   route:'/about'   },
    { label: 'COMPONENTS.NAV.PROJECTS', icon: 'computer', route:'/projects'},
    { label: 'COMPONENTS.NAV.SKILLS',   icon: 'star',     route:'/skills'  },
    { label: 'COMPONENTS.NAV.CONTACT',  icon: 'chat',     route:'/contact' }
  ];

  languages = [
    { code: 'es' as Language, flag: 'assets/flags/es.png', label: 'ES' },
    { code: 'en' as Language, flag: 'assets/flags/gb.png', label: 'EN' },
    { code: 'de' as Language, flag: 'assets/flags/de.png', label: 'DE' }
  ];

  constructor(
    public languageService: LanguageService,
    public themeService: ThemeService
  ) {}

  getCurrentLanguage() {
    return this.languages.find(l => l.code === this.languageService.currentLanguage)
  }

  changeLanguage(code: Language) {
    this.languageService.changeLanguage(code);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
