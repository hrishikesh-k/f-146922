import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-link',
  templateUrl: './project-link.component.html',
  styleUrls: ['./project-link.component.scss'],
  imports: [CommonModule],
})
export class ProjectLinkComponent implements OnInit {
  @Input() url: string = '';
  @Input() desc: string = '';
  constructor() { }

  ngOnInit() {
  }

}
