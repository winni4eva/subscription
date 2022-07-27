import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
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

  loadAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadingAuthAction>(AuthActionTypes.LOADING_AUTH),
      exhaustMap(action =>
        this._authService.login(action).pipe(
          map(data => new LoadingAuthSuccessAction(data)),
          catchError(error => of(new LoadingAuthErrorAction(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private _authService: AuthService
  ) { }
}
