import { Component } from '@angular/core';
import { ContactIconsComponent } from "../shared/contact-icons/contact-icons.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContactIconsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
