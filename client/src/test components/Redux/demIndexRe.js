import React from "react";
import { createStore } from "redux";

// Action
const DemoIndexRedux = () => {
  const increment = () => {
    return {
      type: "INCREMENT",
    };
  };

  const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };

  // Reducer

  const counter = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
    }
  };

  let store = createStore(counter);

  store.subscribe(() => console.log(store.getState()));

  //Dispatch

  store.dispatch(increment());
  store.dispatch(increment());
  store.dispatch(decrement());

  return (
    <div>
      <h1>This is a demo page check console</h1>
    </div>
  );
};

export default DemoIndexRedux;
