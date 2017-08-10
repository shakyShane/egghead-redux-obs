import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import {clear, LOAD_STORIES} from "../actions/index";

function loadStoriesEpic(action$) {
  return action$.ofType(LOAD_STORIES)
    .switchMap(() => {
      return Observable.of(clear()).delay(2000);
    });
}

export const rootEpic = combineEpics(loadStoriesEpic);

