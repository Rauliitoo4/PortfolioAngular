import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { gsap } from 'gsap';
import { timer } from 'rxjs';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill, SkillCategory } from '../../models/skill';
import { LevelPipe } from '../../pipes/level.pipe';
import { FilterItem } from '../../models/interfaces/skills/filter-item';

@Component({
  selector: 'app-skills',
  imports: [
    CommonModule,
    TranslatePipe,
    MatChipsModule,
    MatProgressBarModule,
    MatIconModule,
    LevelPipe
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  private portfolioService = inject(PortfolioService);

  skills: Skill[] = [];
  filteredSkills: Skill[] = [];
  activeFilter: SkillCategory | 'all' = 'all';

  readonly filters: FilterItem[] = [
    { value: 'all',      label: 'PAGES.SKILLS.ALL'},
    { value: 'frontend', label: 'PAGES.SKILLS.FRONTEND'},
    { value: 'backend',  label: 'PAGES.SKILLS.BACKEND'},
    { value: 'database', label: 'PAGES.SKILLS.DATABASE'}
  ];

  ngOnInit(): void {
      this.portfolioService.getSkills().subscribe(skills => {
        this.skills = skills;
        this.filteredSkills = skills;
        timer(100).subscribe(() => this.animate());
      });
  }

  private animate(): void {
    gsap.from('.skill-card', {
      opacity: 0,
      y: 40,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
      clearProps: 'all'
    });
  }

  setFilter(filter: SkillCategory | 'all'): void {
    this.activeFilter = filter;
    this.filteredSkills = filter === 'all'
      ? this.skills
      : this.skills.filter(s => s.category === filter);
    timer(50).subscribe(() => this.animate());
  }
}
