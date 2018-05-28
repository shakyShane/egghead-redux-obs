import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";
import { receiveBeers, SEARCHED_BEERS } from "../actions/index";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/dom/ajax";
import "rxjs/add/operator/map";

const beers = `https://api.punkapi.com/v2/beers`;
const search = term => `${beers}?beer_name=${encodeURIComponent(term)}`;
const ajax = term => Observable.ajax.getJSON(search(term));

function searchBeersEpic(action$) {
  return action$
    .ofType(SEARCHED_BEERS)
    .debounceTime(500)
    .switchMap(({ payload }) => {
      return ajax(payload).map(receiveBeers);
    });
}

export const rootEpic = combineEpics(searchBeersEpic);
