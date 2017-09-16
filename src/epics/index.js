import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import {receiveBeers, searchBeersError, SEARCHED_BEERS} from "../actions/index";

const beers  = `https://api.punkapi.com/v2/beers`;
const search = (term) => `${beers}?beer_name=${encodeURIComponent(term)}`;
const ajax   = (term) =>
  term === 'skull'
    ? Observable.throw(new Error('Ajax failed!'))
    : Observable.ajax.getJSON(search(term));

function searchBeersEpic(action$) {
  return action$.ofType(SEARCHED_BEERS)
    .debounceTime(500)
    .switchMap(({payload}) => {
      return ajax(payload)
        .map(receiveBeers)
        .catch(err => {
          return Observable.of(searchBeersError(err));
        })
    })
}

export const rootEpic = combineEpics(searchBeersEpic);

