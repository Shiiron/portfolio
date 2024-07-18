import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { ContactIconsComponent } from '../shared/contact-icons/contact-icons.component';
import { MenuItem } from 'src/app/model/menu-item';

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

  main_nav: MenuItem[] = [
    {id_to_link: '#about', label: 'A propos'},
    {id_to_link: '#skills', label: 'Compétences'},
    {id_to_link: '#experiences', label: 'Expériences'},
    {id_to_link: '#projects', label: 'Projets'}
  ]

  changeMenu(isClose: boolean = false) {
    let nav = document.querySelector('nav');
    if (nav) {
      nav.classList.add(isClose ? 'close' : 'open');
      nav.classList.remove(isClose ? 'open' : 'close');
    }
  }
}
