import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode, faPalette, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { SkillCardComponent } from "../shared/skill-card/skill-card.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FontAwesomeModule, SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  faPalette = faPalette;
  faCode = faCode;
  faShareNodes = faShareNodes;

  design_skills: string[] = ['Web design', 'Responsive design', 'User experience', 'Figma'];
  code_skills: string[] = ['HTML 5 / CSS 3', 'Javascript', 'Typescript', 'Angular', 'Bootstrap', 'TailwindCSS'];
  share_skills: string[] = ['Code review', 'Pull request', 'Git', 'Github / Gitlab', 'Git flow'];
  futur_skills: string[] = ['React', 'NodeJS', 'C#', 'PHP / Symfony', 'Python', 'PostGre']
}
