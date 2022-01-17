import { Component, Input, OnChanges } from '@angular/core';
import { Project, projects, subCategoryLevel } from './projects';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnChanges {
  projects: Project[] = [];
  subCategoryProjects = {};
  subCategoryNames: string[] = [];
  @Input() page = '';

  constructor() { }

  ngOnChanges() {
    this.projects = projects[this.page] || [];
    this.subCategoryProjects = {};
    this.subCategoryNames = [];

    if(this.page === 'Projetos-Front') {
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
