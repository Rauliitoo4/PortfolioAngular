import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { gsap } from 'gsap';
import { timer } from 'rxjs';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/project';
import { TruncatePipe } from '../../pipes/truncate.pipe';

const BANNER_COLORS = [
  '#6750A4',
  '#B5261E',
  '#006874',
  '#4A6741'
];

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    TranslatePipe,
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

  private readonly portfolioService = inject(PortfolioService);

  projects: Project[] = [];
  expandedId: number | null = null;
  readonly bannerColors: string[] = BANNER_COLORS;

  ngOnInit(): void {
      this.portfolioService.getProjects().subscribe(projects => {
        this.projects = projects;
        timer(100).subscribe(() => this.animate());
      });
  }

  private animate(): void {
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

  toggleExpand(id: number): void {
    this.expandedId = this.expandedId === id ? null : id;
  }

  isExpanded(id: number): boolean {
    return this.expandedId === id;
  }
}
