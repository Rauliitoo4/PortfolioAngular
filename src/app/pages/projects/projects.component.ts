import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { gsap } from 'gsap';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/project';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    TruncatePipe
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  expandedId: number | null = null;

  readonly bannerColors = [
    '#6750A4',
    '#B5261E',
    '#006874',
    '#4A6741'
  ];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
      this.portfolioService.getProjects().subscribe(projects => {
        this.projects = projects;
        setTimeout(() => this.animate(), 100);
      });
  }

  animate(){
    gsap.from('.project-card', {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
      clearProps: 'all'
    });
  }

  getBannerColor (index: number): string {
    return this.bannerColors[index % this.bannerColors.length];
  }

  toggleExpand(id: number) {
    this.expandedId = this.expandedId === id ? null : id;
  }

  isExpanded(id: number): boolean {
    return this.expandedId === id;
  }
}
