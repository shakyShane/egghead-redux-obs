import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";
import {
  CANCEL_SEARCH,
  receiveBeers,
  searchBeersError,
  searchBeersLoading,
  SEARCHED_BEERS
} from "../actions/index";

import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/of";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/observable/concat";

const beers = `https://api.punkapi.com/v2/beers`;
const search = term => `${beers}?beer_name=${encodeURIComponent(term)}`;

export function searchBeersEpic(action$, store, deps) {
  return action$
    .ofType(SEARCHED_BEERS)
    .debounceTime(500, deps.scheduler)
    .filter(action => action.payload !== "")
    .switchMap(({ payload }) => {
      // loading state in UI
      const loading = Observable.of(searchBeersLoading(true));

      // external API call
      const request = deps.ajax
        .getJSON(search(payload))
        .takeUntil(action$.ofType(CANCEL_SEARCH))
        .map(receiveBeers)
        .catch(err => {
          return Observable.of(searchBeersError(err));
        });

      return Observable.concat(loading, request);
    });
}

export const rootEpic = combineEpics(searchBeersEpic);
