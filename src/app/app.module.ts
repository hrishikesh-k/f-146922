import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProjectsListComponent } from './components/pages/projects-list/projects-list.component';
import { AboutComponent } from './components/pages/about/about.component';
import { IntranetsComponent } from './components/shared/intranets/intranets.component';
import { MainComponent } from './components/pages/main/main.component';
import { SkillComponent } from './components/shared/skill/skill.component';
import { ProjectItemComponent } from './components/shared/project-item/project-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectLinkComponent } from './components/pages/about/project-link/project-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsListComponent,
    AboutComponent,
    IntranetsComponent,
    MainComponent,
    SkillComponent,
    ProjectItemComponent,
    ProjectLinkComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
