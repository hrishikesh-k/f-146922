import { Component, Input, OnInit } from '@angular/core';
export interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular 7+',
      level: 6,
    },
    {
      name: 'Typescript',
      level: 6,
    },
    {
      name: 'Scss',
      level: 6,
    },
    {
      name: 'React',
      level: 6,
    },
    {
      name: 'Redux',
      level: 5,
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
      name: 'JQuery',
      level: 5,
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
      name: 'WordPress',
      level: 3,
    },
    {
      name: 'Jenkins',
      level: 4,
    },
    {
      name: 'Sonarqube',
      level: 4,
    },
    {
      name: 'Rest API',
      level: 6,
    },
    {
      name: 'Adobe Package',
      level: 2,
    },
    {
      name: 'Unit testing (Jest)',
      level: 5,
    },
    {
      name: 'Testing e2e (Jasmine)',
      level: 5,
    },
    {
      name: 'Docker',
      level: 3,
    },
    {
      name: 'VueJS',
      level: 3,
    },
    {
      name: 'NestJS',
      level: 3,
    },
    {
      name: 'MySQL',
      level: 5,
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
