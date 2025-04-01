import { Component, OnInit } from '@angular/core';
import { ProjectLinkComponent } from './project-link/project-link.component';
import { SkillComponent } from '../../shared/skill/skill.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [ProjectLinkComponent, SkillComponent],
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
