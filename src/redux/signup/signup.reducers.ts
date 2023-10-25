import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
  } from './signup.actionTypes';
  
  interface SignupState {
    loading: boolean;
    userId: string | null;
    error: string | null;
  }
  
  const initialState: SignupState = {
    loading: false,
    userId: null,
    error: null,
  };
  
  const signupReducer = (state = initialState, action: any): SignupState => {
    switch (action.type) {
      case SIGNUP_REQUEST:
        return {
          ...state,
          loading: true,
          userId: null,
          error: null,
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          loading: false,
          userId: action.payload.userId,
          error: null,
        };
      case SIGNUP_FAILURE:
        return {
          ...state,
          loading: false,
          userId: null,
          error: action.payload.error,
        };
      default:
        return state;
    }
  };
  
  export default signupReducer;
  