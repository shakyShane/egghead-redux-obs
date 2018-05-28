import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";
import { FETCH_STORIES, fetchStoriesFulfilledAction } from "../actions/index";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/dom/ajax";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/observable/forkJoin";

const topStories = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
const url = id =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

function fetchStoriesEpic(action$) {
  return action$.ofType(FETCH_STORIES).switchMap(({ payload }) => {
    return (
      Observable.ajax
        .getJSON(topStories)
        // slice first 5 ids
        .map(ids => ids.slice(0, 5))
        // convert ids -> urls
        .map(ids => ids.map(url))
        // convert urls -> ajax
        .map(urls => urls.map(url => Observable.ajax.getJSON(url)))
        // execute 5 ajax requests
        .mergeMap(reqs => Observable.forkJoin(reqs))
        // results -> store
        .map(stories => fetchStoriesFulfilledAction(stories))
    );
  });
}

export const rootEpic = combineEpics(fetchStoriesEpic);
