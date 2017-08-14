import {RECEIVED_BEERS, SEARCHED_BEERS} from "../actions/index";

const initialState = {
  beers: [],
  loading: false,
};

export function beersReducer(state = initialState, action) {
  switch(action.type) {
    case SEARCHED_BEERS:
      return {
        ...state,
        loading: true
      };
    case RECEIVED_BEERS:
      return {
        beers: action.payload,
        loading: false
      };
    default: return state;
  }
}

export default beersReducer;
