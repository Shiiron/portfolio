import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactIconsComponent } from '../contact-icons/contact-icons.component';
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FontAwesomeModule, ContactIconsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  faArrowTurnDown = faArrowTurnDown;
}
