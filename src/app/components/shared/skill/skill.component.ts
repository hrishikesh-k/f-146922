import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
export interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  imports: [CommonModule],
})
export class SkillComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular 12+',
      level: 6,
    },
    {
      name: 'React',
      level: 6,
    },
    {
      name: 'TypeScript',
      level: 6,
    },
    {
      name: 'Scss',
      level: 6,
    },
    {
      name: 'Redux',
      level: 6,
    },
    {
      name: 'AngularJS',
      level: 4,
    },
    {
      name: 'Git',
      level: 6,
    },
    {
      name: 'React Query',
      level: 6,
    },
    {
      name: 'Javascript',
      level: 6,
    },
    {
      name: 'HTML',
      level: 6,
    },
    {
      name: 'Css',
      level: 6,
    },
    {
      name: 'Bootstrap',
      level: 6,
    },
    {
      name: 'Webpack',
      level: 3,
    },
    {
      name: 'Rest API',
      level: 6,
    },
    {
      name: 'Adobe Package',
      level: 4,
    },
    {
      name: 'Unit testing',
      level: 5,
    },
    {
      name: 'Testing e2e',
      level: 5,
    },
    {
      name: 'Docker',
      level: 3,
    },
    {
      name: 'Zustand',
      level: 6,
    },
    {
      name: 'MySQL',
      level: 5,
    },
    {
      name: 'NodeJS',
      level: 4,
    },
  ];

  show = 0;

  constructor() { }

  ngOnInit() {
    const interval = setInterval(() => {
      this.show++;
      if(this.show > 5) {
        clearInterval(interval);
      }
    }, 150);
  }

}
