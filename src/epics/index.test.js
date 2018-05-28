import { Observable } from "rxjs";
import { VirtualTimeScheduler } from "rxjs";
import { searchBeers } from "../actions/index";
import { configureStore } from "../configureStore";

it("should perform a search (redux)", function() {
  const scheduler = new VirtualTimeScheduler();
  const deps = {
    scheduler,
    ajax: {
      getJSON: () => Observable.of([{ name: "shane" }])
    }
  };

  const store = configureStore(deps);

  const action = searchBeers("shane");

  store.dispatch(action);

  scheduler.flush();

  expect(store.getState().beers.length).toBe(1);
});
