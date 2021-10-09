import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intranets',
  templateUrl: './intranets.component.html',
  styleUrls: ['./intranets.component.scss']
})
export class IntranetsComponent implements OnInit {

  companies = [
    {
      name: 'Tallento Engenharia',
      image: 'tallento.png',
    },
    {
      name: 'Class Solutions',
      image: 'class.png',
    },
    {
      name: 'Hersheys',
      image: 'hersheys.png',
    },
    {
      name: 'Newton',
      image: 'newton.png',
    },
    {
      name: 'Nexa',
      image: 'nexa.png',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
