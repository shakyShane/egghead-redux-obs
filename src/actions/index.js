export const SEARCHED_BEERS = 'SEARCHED_BEERS';
export const RECEIVED_BEERS = 'RECEIVED_BEERS';

export function searchBeers(query) {
  return {
    type: SEARCHED_BEERS,
    payload: query
  }
}

export function receiveBeers(beers) {
  return {
    type: RECEIVED_BEERS,
    payload: beers
  }
}
