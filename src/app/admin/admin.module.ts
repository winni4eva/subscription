import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OffersComponent } from './offers/offers.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AngularMaterialModule } from '../material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    OffersComponent,
    SubscriptionsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule,
  ]
})
export class AdminModule { }
