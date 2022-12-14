import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ProjectsListComponent } from './components/pages/projects-list/projects-list.component';


const routes: Routes = [
  { path: '', component: ProjectsListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects/designs', component: ProjectsListComponent },
  { path: 'projects/demos', component: ProjectsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
