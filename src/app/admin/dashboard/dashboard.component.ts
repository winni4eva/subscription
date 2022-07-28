import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  offers = [];
  subscriptions = [];

  constructor(private _adminService: AdminService) { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers() {
    this._adminService.getOffers()
      .subscribe(
        (response: any) => {
          const { offers } = response;
          this.offers = offers;
        },
        error => console.error(error)
      );
  }

  getSubscription(event: number) {
    this._adminService.getOfferSubscription(event)
      .subscribe(
        (response: any) => {
          const { subscriptions } = response;
          this.subscriptions = subscriptions;
        },
        error => console.error(error)
      );
  }

}
