import { Component, Input, OnChanges } from '@angular/core';
import { Project, projects } from './projects';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnChanges {
  projects: Project[] = [];
  @Input() page = 'Projects';

  constructor() { }

  ngOnChanges() {
    this.projects = projects[this.page] || [];
  }
}
