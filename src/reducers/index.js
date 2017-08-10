import {FETCH_STORIES, FETCH_STORIES_FULFILLED} from "../actions/index";

const initialState = {
  stories: [],
  loading: false,
};

export function storiesReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_STORIES:
      return {
        stories: [],
        loading: true
      };
    case FETCH_STORIES_FULFILLED:
      return {
        stories: action.payload,
        loading: false
      };
    default: return state;
  }
}

export default storiesReducer;
