import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { gsap } from 'gsap';
import { EducationItem } from '../../models/interfaces/about/education-item';
import { AchievementItem } from '../../models/interfaces/about/achievement-item';
import { LanguageItem } from '../../models/interfaces/about/language-item';
import { HobbyItem } from '../../models/interfaces/about/hobby-item';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, MatChipsModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  readonly education: EducationItem[] = [
    { icon: 'school', degree: 'PAGES.ABOUT.EDUCATION.DEGREE_UNI', school:'PAGES.ABOUT.EDUCATION.SCHOOL_UNI', period: '2021 — ', present: true },
    { icon: 'menu_book', degree: 'PAGES.ABOUT.EDUCATION.DEGREE_BACH', school:'PAGES.ABOUT.EDUCATION.SCHOOL_BACH', period: '2018 — 2020', present: false },
    { icon: 'auto_stories', degree: 'PAGES.ABOUT.EDUCATION.DEGREE_ESO', school:'PAGES.ABOUT.EDUCATION.SCHOOL_ESO', period: '2014 — 2018', present: false}
  ];

  readonly achievements: AchievementItem[] = [
    { icon: 'emoji_events', title: 'PAGES.ABOUT.ACHIEVEMENTS.BLACK_BELT', subtitle: 'PAGES.ABOUT.ACHIEVEMENTS.BLACK_BELT_SUB', gold: false },
    { icon: 'military_tech', title: 'PAGES.ABOUT.ACHIEVEMENTS.CHAMPION', subtitle: 'PAGES.ABOUT.ACHIEVEMENTS.CHAMPION_SUB', gold: true }
  ];

  readonly languages: LanguageItem[] = [
    { name: 'PAGES.ABOUT.LANGUAGES.SPANISH', level: 'PAGES.ABOUT.LANGUAGES.NATIVE', flag: 'assets/flags/es.png' },
    { name: 'PAGES.ABOUT.LANGUAGES.ENGLISH', level: 'PAGES.ABOUT.LANGUAGES.HIGH', flag: 'assets/flags/gb.png' },
    { name: 'PAGES.ABOUT.LANGUAGES.GERMAN', level: 'PAGES.ABOUT.LANGUAGES.BASIC', flag: 'assets/flags/de.png' },
    { name: 'PAGES.ABOUT.LANGUAGES.FRENCH', level: 'PAGES.ABOUT.LANGUAGES.BASIC', flag: 'assets/flags/fr.png' }
  ];

  readonly hobbies: HobbyItem[] = [
    { icon: 'emoji_events',        label: 'PAGES.ABOUT.HOBBIES.TAEKWONDO' },
    { icon: 'sports_martial_arts', label: 'PAGES.ABOUT.HOBBIES.MARTIAL_ARTS' },
    { icon: 'sports_esports',      label: 'PAGES.ABOUT.HOBBIES.GAMING' },
    { icon: 'code',                label: 'PAGES.ABOUT.HOBBIES.CODING' },
    { icon: 'sports_soccer',       label: 'PAGES.ABOUT.HOBBIES.FOOTBALL' },
    { icon: 'sports_basketball',   label: 'PAGES.ABOUT.HOBBIES.BASKETBALL' }
  ];

  ngOnInit(): void {
      this.animate();
  }

  private animate(): void {
    gsap.from('.about-hero', {opacity: 0, y: 40, duration: 0.6, ease: "power2.out" });
    gsap.from('.about-section', {opacity: 0, y: 40, duration: 0.6, stagger: 0.2, ease: "power2.out", delay: 0.3 });
  }
}
