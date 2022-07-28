import { AuthState } from '../reducers/auth.reducer';
import { OfferState } from '../reducers/offer.reducer';

export interface AppState {
  readonly offer: OfferState
}
