import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { gsap } from 'gsap';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill, SkillCategory } from '../../models/skill';
import { LevelPipe } from '../../pipes/level.pipe';

@Component({
  selector: 'app-skills',
  imports: [
    CommonModule,
    TranslateModule,
    MatChipsModule,
    MatProgressBarModule,
    MatIconModule,
    LevelPipe
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];
  filteredSkills: Skill[] = [];
  activeFilter: SkillCategory | 'all' = 'all';

  filters: { value: SkillCategory | 'all', label: string }[] = [
    { value: 'all',      label: 'PAGES.SKILLS.ALL'},
    { value: 'frontend', label: 'PAGES.SKILLS.FRONTEND'},
    { value: 'backend',  label: 'PAGES.SKILLS.BACKEND'},
    { value: 'database', label: 'PAGES.SKILLS.DATABASE'}
  ];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
      this.portfolioService.getSkills().subscribe(skills => {
        this.skills = skills;
        this.filteredSkills = skills;
        setTimeout(() => this.animate(), 100);
      });
  }

  animate() {
    gsap.from('.skill-card', {
      opacity: 0,
      y: 40,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
      clearProps: 'all'
    });
  }

  setFilter(filter: SkillCategory | 'all') {
    this.activeFilter = filter;
    this.filteredSkills = filter === 'all'
      ? this.skills
      : this.skills.filter(s => s.category === filter);
    setTimeout(() => this.animate(), 50);
  }
}
