import { Component, OnInit } from '@angular/core';
import { SkillComponent } from '../../shared/skill/skill.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [SkillComponent],
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
