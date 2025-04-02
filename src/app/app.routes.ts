import { Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ProjectsListComponent } from './components/pages/projects-list/projects-list.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: ProjectsListComponent },
  { path: 'projects/demos', component: ProjectsListComponent },
  { path: 'projects/designs', component: ProjectsListComponent }
];
