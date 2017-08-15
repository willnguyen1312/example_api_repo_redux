import { combineReducers } from "redux";
import { createReducer } from "redux-create-reducer";
// import {
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGIN_FAILURE,
//   LOGOUT_SUCCESS,
//   QUOTE_FAILURE,
//   QUOTE_REQUEST,
//   QUOTE_SUCCESS,
//   LOGOUT_FAILURE,
//   LOGOUT_REQUEST
// } from "./actions";

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.

const LOGIN_REQUEST = (state, action) =>
  Object.assign({}, state, {
    isFetching: true,
    isAuthenticated: false
    // user: action.creds - not good to save credentials in memory
  });

const LOGIN_SUCCESS = state =>
  Object.assign({}, state, {
    isFetching: false,
    isAuthenticated: true,
    errorMessage: ""
  });

const LOGIN_FAILURE = (state, action) =>
  Object.assign({}, state, {
    isFetching: false,
    isAuthenticated: false,
    errorMessage: action.message
  });

const LOGOUT_SUCCESS = (state, action) =>
  Object.assign({}, state, {
    isFetching: true,
    isAuthenticated: false
  });

const initAuthState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem("access_token") ? true : false,
  errorMessage: ""
};

const auth = createReducer(initAuthState, {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
});

// function auth(
//   state = {
//     isFetching: false,
//     isAuthenticated: localStorage.getItem("access_token") ? true : false
//   },
//   action
// ) {
//   switch (action.type) {
//     case "LOGIN_REQUEST":
//       return Object.assign({}, state, {
//         isFetching: true,
//         isAuthenticated: false,
//         user: action.creds
//       });
//     case "LOGIN_SUCCESS":
//       return Object.assign({}, state, {
//         isFetching: false,
//         isAuthenticated: true,
//         errorMessage: ""
//       });
//     case "LOGIN_FAILURE":
//       return Object.assign({}, state, {
//         isFetching: false,
//         isAuthenticated: false,
//         errorMessage: action.message
//       });
//     case "LOGOUT_SUCCESS":
//       return Object.assign({}, state, {
//         isFetching: true,
//         isAuthenticated: false
//       });
//     default:
//       return state;
//   }
// }

const QUOTE_REQUEST = state =>
  Object.assign({}, state, {
    isFetching: true
  });

const QUOTE_SUCCESS = (state, action) =>
  Object.assign({}, state, {
    isFetching: false,
    quote: action.response,
    authenticated: action.authenticated || false
  });

const QUOTE_FAILURE = (state, action) =>
  Object.assign({}, state, {
    isFetching: false
  });

const initStateQuotes = {
  isFetching: false,
  quote: "",
  authenticated: false
};
const quotes = createReducer(initStateQuotes, {
  QUOTE_REQUEST,
  QUOTE_SUCCESS,
  QUOTE_FAILURE
});
// The quotes reducer
// function quotes(
//   state = {
//     isFetching: false,
//     quote: "",
//     authenticated: false
//   },
//   action
// ) {
//   switch (action.type) {
//     case "QUOTE_REQUEST":
//       return Object.assign({}, state, {
//         isFetching: true
//       });
//     case "QUOTE_SUCCESS":
//       return Object.assign({}, state, {
//         isFetching: false,
//         quote: action.response,
//         authenticated: action.authenticated || false
//       });
//     case "QUOTE_FAILURE":
//       return Object.assign({}, state, {
//         isFetching: false
//       });
//     default:
//       return state;
//   }
// }

// We combine the reducers here so that they
// can be left split apart above
const quotesApp = combineReducers({
  auth,
  quotes
});

export default quotesApp;
