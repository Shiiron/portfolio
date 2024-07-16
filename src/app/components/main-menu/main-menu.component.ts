import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { ContactIconsComponent } from '../contact-icons/contact-icons.component';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [FontAwesomeModule, ContactIconsComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent {
  faCircleXmark = faCircleXmark;
  faBars = faBars;

  changeMenu(isClose: boolean = false) {
    let nav = document.querySelector('nav');
    if (nav) {
      nav.classList.add(isClose ? 'close' : 'open');
      nav.classList.remove(isClose ? 'open' : 'close');
    }
  }
}
