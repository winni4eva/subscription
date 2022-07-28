import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  offers = [];
  subscriptions = [];

  constructor(
    private _adminService: AdminService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers() {
    this.openSnackBar('Fetching Offers', 'loading...');
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
    this.openSnackBar('Fetching Subscriptions', 'loading...');
    this._adminService.getOfferSubscription(event)
      .subscribe(
        (response: any) => {
          const { subscriptions } = response;
          this.subscriptions = subscriptions;
        },
        error => console.error(error)
      );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }

}
