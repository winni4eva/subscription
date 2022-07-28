import { AuthActionTypes, AuthAction } from '../actions/auth.actions';
import { AuthModel } from '../models/auth.model';

export interface AuthState {
  credentials: AuthModel,
  loading: boolean,
  error: any
}

const initialState: AuthState = {
  credentials: {authToken: ''},
  loading: false,
  error: null
};

export function AuthReducer(state: AuthState = initialState, action: AuthAction) {
  switch (action.type) {
    case AuthActionTypes.LOADING_AUTH:
      return {
        ...state,
        loading: true
      };
    case AuthActionTypes.LOADING_AUTH_SUCCESS:
      return {
        ...state,
        credentials: action.payload,
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
