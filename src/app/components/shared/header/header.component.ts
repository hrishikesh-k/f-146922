import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, RouterLink],
})
export class HeaderComponent implements OnInit {
  showMobileMenu = false;

  constructor() { }

  ngOnInit() {
  }

  onClickLink() {
    this.showMobileMenu = false;
  }

  onClickMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
