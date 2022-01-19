import React from "react";
import { createStore } from "redux";
import { allReducers } from "./Reducers";
import NavBar from "../nav";
import { Provider } from "react-redux";
import ReFront from "./Reducers/front";

const ReduxIndex = () => {
  const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <div>
      <NavBar />
      <Provider store={store}>
        <ReFront />
      </Provider>
    </div>
  );
};

export default ReduxIndex;
