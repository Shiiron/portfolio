import { Component, Input } from '@angular/core';
import { FontAwesomeModule, SizeProp } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-icons',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contact-icons.component.html',
  styleUrl: './contact-icons.component.scss',
})
export class ContactIconsComponent {
  @Input() iconSize: SizeProp = '2xl';
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
}
