import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  @Input() subscriptions: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
