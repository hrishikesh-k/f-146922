import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
