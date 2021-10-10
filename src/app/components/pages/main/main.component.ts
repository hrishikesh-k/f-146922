import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  page = 'Projects';
  constructor() { }

  ngOnInit() {
  }

  onPageChange(pageName) {
    this.page = pageName;
    window.scrollTo(0, 0);
  }
}
