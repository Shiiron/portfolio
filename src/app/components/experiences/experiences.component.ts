import { Component } from '@angular/core';
import { Experience } from 'src/app/model/experience';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  experiences: Experience[] = [
    {
      menu_label: 'Solaris BI',
      title: 'Développeur Front-End',
      sub_title: 'Mars 2022 - Octobre 2023',
      description: `Développement de l'application APOLLO, le logisticiel de gestion logistique pour les PME qui vous accompagne dans la gestion de véhicules et de tournée.

      Responsable du développement Front-End de l'application
      Création et maintenance des différents composants Angular
      Intégration des designs et amélioration de l'expérience utilisateur
      `
    },
    {
      menu_label: 'Synergee',
      title: 'Développeur Front-End',
      sub_title: 'Mars 2017 - Mars 2022',
      description: `Développement de l'application Synergee, logiciel d'aide au pilotage de vos réseaux de franchise

      Responsable du développement Front-End de l'application
      Création et maintenance des différents composants Angular
      Intégration des designs et travail sur l'expérience utilisateur
      `
    }
  ];
  selectedExperience: Experience;
  selectedIndex: number = 0;

  constructor() {
    this.selectedExperience = this.experiences[0];
  }

  setSelectedExperience(i: number) {
    this.selectedExperience = this.experiences[i];
    this.selectedIndex = i;
  }
}
