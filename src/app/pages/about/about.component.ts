import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { gsap } from 'gsap';

@Component({
  selector: 'app-about',
  imports: [TranslateModule, MatChipsModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  languages = [
    { name: 'PAGES.ABOUT.LANGUAGES.SPANISH', level: 'PAGES.ABOUT.LANGUAGES.NATIVE', flag: 'assets/flags/es.png' },
    { name: 'PAGES.ABOUT.LANGUAGES.ENGLISH', level: 'PAGES.ABOUT.LANGUAGES.HIGH', flag: 'assets/flags/gb.png' },
    { name: 'PAGES.ABOUT.LANGUAGES.GERMAN', level: 'PAGES.ABOUT.LANGUAGES.BASIC', flag: 'assets/flags/de.png' },
    { name: 'PAGES.ABOUT.LANGUAGES.FRENCH', level: 'PAGES.ABOUT.LANGUAGES.BASIC', flag: 'assets/flags/fr.png' },
  ];

  hobbies = [
    { icon: 'emoji_events', label: 'PAGES.ABOUT.HOBBIES.TAEKWONDO' },
    { icon: 'sports_esports', label: 'PAGES.ABOUT.HOBBIES.GAMING' },
    { icon: 'code', label: 'PAGES.ABOUT.HOBBIES.CODING' },
    { icon: 'sports_soccer', label: 'PAGES.ABOUT.HOBBIES.FOOTBALL' },
    { icon: 'sports_basketball', label: 'PAGES.ABOUT.HOBBIES.BASKETBALL' },
  ];

  ngOnInit() {
      this.animate();
  }

  animate() {
    gsap.from('.about-hero', {opacity: 0, y: 40, duration: 0.6, ease: "power2.out" });
    gsap.from('.about-section', {opacity: 0, y: 40, duration: 0.6, stagger: 0.2, ease: "power2.out", delay: 0.3 });
  }
}
