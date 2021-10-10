import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onPageChange: EventEmitter<String> = new EventEmitter();
  showMobileMenu = false;

  constructor() { }

  ngOnInit() {
  }

  onClickLink(pageName) {
    this.onPageChange.emit(pageName);
    this.showMobileMenu = false;
  }

  onClickMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
