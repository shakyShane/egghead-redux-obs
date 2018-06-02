import { Observable } from "rxjs";
import { ActionsObservable } from "redux-observable";
import { fetchUserEpic } from "./fetch-user-epic";
import "rxjs/add/operator/toArray";

it("should return correct actions", function() {
  const action$ = ActionsObservable.of({
    type: "FETCH_USER",
    payload: "shakyshane"
  });

  const output$ = fetchUserEpic(action$);
  output$.toArray().subscribe(actions => {
    expect(actions.length).toBe(1);
  });
});
