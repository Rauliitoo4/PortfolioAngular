import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService, Language } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { NavItem } from '../../models/interfaces/navbar/nav-item';
import { LanguageOption } from '../../models/interfaces/navbar/language-option';


@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatSlideToggleModule,
    TranslatePipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  private readonly languageService = inject(LanguageService);
  private readonly themeService = inject(ThemeService);

  readonly navItems: NavItem[] = [
    { label: 'COMPONENTS.NAV.HOME',     icon: 'home',     route:'/'        },
    { label: 'COMPONENTS.NAV.ABOUT',    icon: 'person',   route:'/about'   },
    { label: 'COMPONENTS.NAV.PROJECTS', icon: 'computer', route:'/projects'},
    { label: 'COMPONENTS.NAV.SKILLS',   icon: 'star',     route:'/skills'  },
    { label: 'COMPONENTS.NAV.CONTACT',  icon: 'chat',     route:'/contact' }
  ];

  readonly languages: LanguageOption[] = [
    { code: 'es' as Language, flag: 'assets/flags/es.png', label: 'ES' },
    { code: 'en' as Language, flag: 'assets/flags/gb.png', label: 'EN' },
    { code: 'de' as Language, flag: 'assets/flags/de.png', label: 'DE' }
  ];

  get currentLanguageCode(): Language {
    return this.languageService.currentLanguage;
  }

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }

  getCurrentLanguage(): LanguageOption | undefined {
    return this.languages.find(lang => lang.code === this.languageService.currentLanguage);
  }

  changeLanguage(code: Language): void {
    this.languageService.changeLanguage(code);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
