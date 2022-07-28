import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { OffersComponent } from './offers/offers.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';


const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: 'offers',
      component: OffersComponent,
    },
    {
      path: 'subscriptions',
      component: SubscriptionsComponent
    },
    { path: '', pathMatch: 'full', redirectTo: 'admin' },
  ],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
