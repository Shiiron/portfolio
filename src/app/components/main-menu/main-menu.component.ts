import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEnvelope,
  faCircleXmark,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent {
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faCircleXmark = faCircleXmark;
  FaBars = faBars;

  changeMenu(isClose: boolean = false) {
    let nav = document.querySelector('nav');
    if (nav) {
      nav.classList.add(isClose ? 'close' : 'open');
      nav.classList.remove(isClose ? 'open' : 'close');
    }
  }
}
