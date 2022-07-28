import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {
  LoadingAuthAction,
  LoadingAuthSuccessAction,
  LoadingAuthErrorAction
} from '../actions/auth.actions'
import { of, exhaustMap } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { AuthActionTypes } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  @Effect() loadAuth$ = this.actions$
    .pipe(
      ofType<LoadingAuthAction>(AuthActionTypes.LOADING_AUTH),
      mergeMap(
        (credentials) => this._authService.login(credentials)
          .pipe(
            map(data => {
              //return new LoadingAuthSuccessAction(data)
            }),
            catchError(error => of(new LoadingAuthErrorAction(error)))
          )
      ),
  )

  constructor(
    private actions$: Actions,
    private _authService: AuthService
  ) { }
}
