import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  @Input() offers: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
