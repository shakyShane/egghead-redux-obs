import {
  CANCEL_SEARCH, RECEIVED_BEERS, SEARCHED_BEERS, SEARCHED_BEERS_ERROR,
  SEARCHED_BEERS_LOADING
} from "../actions/index";

const initialState = {
  messages: [],
  beers: [],
  loading: false,
};

export function beersReducer(state = initialState, action) {
  switch(action.type) {
    case SEARCHED_BEERS_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case CANCEL_SEARCH:
      return {
        ...state,
        loading: false,
      };
    case SEARCHED_BEERS:
      return {
        ...state,
        messages: [],
      };
    case SEARCHED_BEERS_ERROR:
      return {
        ...state,
        loading: false,
        messages: [{type: 'error', text: action.payload}]
      };
    case RECEIVED_BEERS:
      return {
        ...state,
        beers: action.payload,
        loading: false,
      };
    default: return state;
  }
}

export default beersReducer;
