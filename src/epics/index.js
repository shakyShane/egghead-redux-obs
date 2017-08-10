import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import {FETCH_USER, fetchUserFulfilledAction} from "../actions/index";

function fetchUserEpic(action$) {
  return action$.ofType(FETCH_USER)
    .switchMap(({payload}) => {
      return Observable.ajax.getJSON(`https://api.github.com/users/${payload}`)
        .map(user => {
          return fetchUserFulfilledAction(user)
        })
    })
}

export const rootEpic = combineEpics(fetchUserEpic);

