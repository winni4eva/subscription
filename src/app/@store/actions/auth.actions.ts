import { Action } from '@ngrx/store';
import { Auth } from '../models/auth.model';

export enum AuthActionTypes {
  LOADING_AUTH = 'Loading Auth',
  LOADING_AUTH_SUCCESS = 'Loading Auth Success',
  LOADING_AUTH_ERROR = 'Loading Auth Error',
}
export class LoadingAuthAction implements Action {
  readonly type = AuthActionTypes.LOADING_AUTH;

  constructor(public credentials: any) { }
}

export class LoadingAuthSuccessAction implements Action {
  readonly type = AuthActionTypes.LOADING_AUTH_SUCCESS;

  constructor(public payload: any) { }
}

export class LoadingAuthErrorAction implements Action {
  readonly type = AuthActionTypes.LOADING_AUTH_ERROR;

  constructor(public payload: Error) { }
}

export type AuthAction = LoadingAuthAction |
  LoadingAuthSuccessAction |
  LoadingAuthErrorAction;
