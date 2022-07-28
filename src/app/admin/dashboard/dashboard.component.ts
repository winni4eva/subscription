import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppState } from 'src/app/@store/models/app-state.model';
import { State, Store } from '@ngrx/store';
import { LoadingOfferAction } from '../../@store/actions/offer.actions';
import { Observable } from 'rxjs';
import { OfferModel } from 'src/app/@store/models/offer.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //offers = [];
  subscriptions = [];
  offers$!: Observable<Array<OfferModel>>;
  loading$!: Observable<Boolean>;
  error$!: Observable<Error>;

  constructor(
    private _adminService: AdminService,
    private _snackBar: MatSnackBar,
    private store: Store<AppState>,
    private state: State<AppState>) { }

  ngOnInit(): void {
    this.initialiseOffers();
  }

  initialiseOffers() {
    this.openSnackBar('Fetching Offers', 'loading...');
    this.offers$ = this.store.select(store => store.offer.list);
    this.loading$ = this.store.select(store => store.offer.loading);
    this.error$ = this.store.select(store => store.offer.error);
    this.store.dispatch(new LoadingOfferAction());
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
