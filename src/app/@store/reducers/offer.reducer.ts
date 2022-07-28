import { OfferActionTypes, OfferAction } from '../actions/offer.actions';
import { OfferModel } from '../models/offer.model';

export interface OfferState {
  list: OfferModel[],
  loading: boolean,
  error: Error
}

const initialState: OfferState = {
  list: [],
  loading: false,
  error: {name: '', message: ''}
};

export function OfferReducer(state: OfferState = initialState, action: OfferAction) {
  switch (action.type) {
    case OfferActionTypes.LOADING_OFFER:
      return {
        ...state,
        loading: true
      };
    case OfferActionTypes.LOADING_OFFER_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case OfferActionTypes.LOADING_OFFER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
