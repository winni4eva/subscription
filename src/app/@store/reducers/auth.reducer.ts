import { AuthActionTypes, AuthAction } from '../actions/auth.actions';
import { Auth } from '../models/auth.model';

export interface AuthState {
  credentials: Auth,
  loading: boolean,
  error: any
}

const initialState: AuthState = {
  credentials: {authToken: ''},
  loading: false,
  error: null
};

export function AssetReducer(state: AuthState = initialState, action: AuthAction) {
  switch (action.type) {
    case AuthActionTypes.LOADING_AUTH:
      return {
        ...state,
        loading: true
      };
    case AuthActionTypes.LOADING_AUTH_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case AuthActionTypes.LOADING_AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
