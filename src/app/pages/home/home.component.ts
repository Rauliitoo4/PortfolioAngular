import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { gsap } from 'gsap';
import { StatItem } from '../../models/interfaces/home/stat-item';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    TranslatePipe,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  readonly stats: StatItem[] = [
    { value: 4, label: 'PAGES.HOME.STATS.PROJECTS'  },
    { value: 5, label: 'PAGES.HOME.STATS.YEARS'     },
    { value: 11, label: 'PAGES.HOME.STATS.SKILLS'    },
    { value: 3, label: 'PAGES.HOME.STATS.LANGUAGES' }
  ];

  ngOnInit(): void {
      this.animateHero();
  }

  animateHero(): void {
    const tl = gsap.timeline();

    tl.from('.hero-greeting', {opacity: 0, y:30, duration: 0.6, ease: 'power2.out'})
      .from('.hero-name',     {opacity: 0, y:30, duration: 0.6, ease: 'power2.out'}, '-=0.3')
      .from('.hero-role',     {opacity: 0, y:30, duration: 0.6, ease: 'power2.out'}, '-=0.3')
      .from('.hero-subtitle', {opacity: 0, y:30, duration: 0.6, ease: 'power2.out'}, '-=0.3')
      .from('.hero-photo',    {opacity: 0, scale: 0.8, duration: 0.8, ease: 'back.out(1.7)'}, '-=0.4')
      .from('.hero-buttons',  {opacity: 0, y:20, duration: 0.5, ease: 'power2.out'}, '-=0.3')
      .from('.stat-card',     {opacity: 0, y:40, duration: 0.5, stagger: 0.1, ease: 'power2.out'}, '-=0.2');
  }
}
