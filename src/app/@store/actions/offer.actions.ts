import { Action } from '@ngrx/store';
import { OfferModel } from '../models/offer.model';

export enum OfferActionTypes {
  LOADING_OFFER = 'Loading Offers',
  LOADING_OFFER_SUCCESS = 'Loading Offer Success',
  LOADING_OFFER_ERROR = 'Loading Offer Error',
}
export class LoadingOfferAction implements Action {
  readonly type = OfferActionTypes.LOADING_OFFER;
}
export class LoadingOfferSuccessAction implements Action {
  readonly type = OfferActionTypes.LOADING_OFFER_SUCCESS;

  constructor(public payload: Array<OfferModel>) { }
}
export class LoadingOfferErrorAction implements Action {
  readonly type = OfferActionTypes.LOADING_OFFER_ERROR;

  constructor(public payload: Error) { }
}

export type OfferAction = LoadingOfferAction |
  LoadingOfferSuccessAction |
  LoadingOfferErrorAction;
