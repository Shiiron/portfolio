import { Component, Input } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input() skillList: string[] = [];
  @Input() icon!: IconDefinition;
  @Input() title: string = '';
}
