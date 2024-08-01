import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-projet-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjetCardComponent {
  @Input() project!: Project;

  faGithub = faGithub;
  faEye = faEye;
}
