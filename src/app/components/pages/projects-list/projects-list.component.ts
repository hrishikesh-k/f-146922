import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project, projects, subCategoryLevel } from './projects';
import { IntranetsComponent } from '../../shared/intranets/intranets.component';
import { ProjectItemComponent } from '../../shared/project-item/project-item.component';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  imports: [IntranetsComponent, ProjectItemComponent],
})
export class ProjectsListComponent implements OnInit {
  projects: Project[] = [];
  subCategoryProjects = {};
  subCategoryNames: string[] = [];
  page = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.page = this.router.url.split('projects/')[1] || 'main';
    this.projects = projects[this.page] || [];
    this.subCategoryProjects = {};
    this.subCategoryNames = [];

    if(this.page === 'demos') {
      this.projects.forEach(project => {
        if(!this.subCategoryProjects[project.subCategory]) {
          this.subCategoryProjects[project.subCategory] = [];
          this.subCategoryNames.push(project.subCategory);
        }

        this.subCategoryProjects[project.subCategory].push(project);
      });

      this.subCategoryNames.sort((nameA, nameB) => {
        return subCategoryLevel[nameA] - subCategoryLevel[nameB];
      })
    }

  }
}
