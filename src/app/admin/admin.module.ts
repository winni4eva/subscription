import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OffersComponent } from './offers/offers.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';



@NgModule({
  declarations: [
    DashboardComponent,
    OffersComponent,
    SubscriptionsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
