import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactIconsComponent } from './components/shared/contact-icons/contact-icons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainMenuComponent,
    FooterComponent,
    AboutComponent,
    ExperiencesComponent,
    ProjectsComponent,
    ContactIconsComponent,
    FontAwesomeModule,
    HomepageComponent,
    SkillsComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
