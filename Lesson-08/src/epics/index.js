import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";
import {
  receiveBeers,
  searchBeersError,
  SEARCHED_BEERS
} from "../actions/index";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/dom/ajax";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";

const beers = `https://api.punkapi.com/v2/beers`;
const search = term => `${beers}?beer_name=${encodeURIComponent(term)}`;
const ajax = term =>
  term === "skull"
    ? Observable.throw(new Error("Ajax failed!"))
    : Observable.ajax.getJSON(search(term));

function searchBeersEpic(action$) {
  return action$
    .ofType(SEARCHED_BEERS)
    .debounceTime(500)
    .switchMap(({ payload }) => {
      return ajax(payload)
        .map(receiveBeers)
        .catch(err => {
          return Observable.of(searchBeersError(err));
        });
    });
}

export const rootEpic = combineEpics(searchBeersEpic);
