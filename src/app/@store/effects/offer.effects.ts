import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {
  LoadingOfferAction,
  LoadingOfferSuccessAction,
  LoadingOfferErrorAction
} from '../actions/offer.actions'
import { of } from 'rxjs';
import { OfferActionTypes } from '../actions/offer.actions';
import { AdminService } from 'src/app/admin/admin.service';

@Injectable()
export class OfferEffects {

  @Effect() loadAssets$ = this.actions$
    .pipe(
      ofType<LoadingOfferAction>(OfferActionTypes.LOADING_OFFER),
      mergeMap(
        () => this._offerService.getOffers()
          .pipe(
            map((data: any) => {
              const { offers } = data;
              return new LoadingOfferSuccessAction(offers)
            }),
            catchError(error => of(new LoadingOfferErrorAction(error)))
          )
      ),
  )

  constructor(
    private actions$: Actions,
    private _offerService: AdminService
  ) { }
}
