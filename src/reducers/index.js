import {FETCH_USER, FETCH_USER_FULFILLED} from "../actions/index";

const initialState = {
  users: [
    'shakyshane',
    'sindresorhus',
    'substack'
  ],
  current: null,
  loading: false,
};

export function storiesReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER:
      return {
        ...state,
        current: null,
        loading: true
      };
    case FETCH_USER_FULFILLED:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    default: return state;
  }
}

export default storiesReducer;
