// import { Dispatch } from 'redux';
// import { auth } from '../firebase'; // Import your Firebase authentication instance
// import {
//   SIGNUP_REQUEST,
//   SIGNUP_SUCCESS,
//   SIGNUP_FAILURE,
// } from './signup.actionTypes';

// // Define the action types
// interface SignupRequestAction {
//   type: typeof SIGNUP_REQUEST;
// }

// interface SignupSuccessAction {
//   type: typeof SIGNUP_SUCCESS;
//   payload: { userId: string };
// }

// interface SignupFailureAction {
//   type: typeof SIGNUP_FAILURE;
//   payload: { error: string };
// }

// // Define the action creators
// export const signupRequest = (): SignupRequestAction => ({
//   type: SIGNUP_REQUEST,
// });

// export const signupSuccess = (userId: string): SignupSuccessAction => ({
//   type: SIGNUP_SUCCESS,
//   payload: { userId },
// });

// export const signupFailure = (error: string): SignupFailureAction => ({
//   type: SIGNUP_FAILURE,
//   payload: { error },
// });

// // Async action creator for sign-up request
// export const signup = (email: string, password: string) => {
//   return async (dispatch: Dispatch) => {
//     dispatch(signupRequest());

//     try {
//       const response = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );

//       if (response.user) {
//         dispatch(signupSuccess(response.user.uid));
//       } else {
//         dispatch(signupFailure('Sign-up failed.'));
//       }
//     } catch (error) {
//       dispatch(signupFailure('An error occurred.'));
//     }
//   };
// };
