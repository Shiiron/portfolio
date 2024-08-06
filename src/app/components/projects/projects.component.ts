import { Component } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjetCardComponent } from '../shared/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjetCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[];

  constructor() {
    this.projects = [
      {
        img: '/assets/img/portfolio.png',
        title: 'Portfolio',
        description: 'Le site que vous êtes entrain de visiter ! Portfolio simple réalisé avec Angular 18 et TailwindCSS',
        github_link: 'https://github.com/Shiiron/portfolio'
      },
      {
        img: '/assets/img/country-list.png',
        title: 'Liste de pays',
        description: 'Liste de pays réalisée avec Angular et l\'api REST country pour un projet frontend-mentor',
        github_link: 'https://github.com/Shiiron/frontend-mentor-angular/tree/country-list',
        website_link: 'https://country-list-nu.vercel.app/country-list/list'
      },
      {
        img: '/assets/img/space-tourism.png',
        title: 'Space Tourism',
        description: 'Site vitrine fictif pour une agence de tourism spatial, réalisé avec Angular pour un projet frontend-mentor',
        github_link: 'https://github.com/Shiiron/frontend-mentor-angular/tree/space-tourism',
        website_link: 'https://frontend-mentor-angular.vercel.app/home/main'
      }
    ]
  }
}
