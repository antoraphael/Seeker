import React from "react";

const IsLogged = (state = false, action) => {
  switch (action.type) {
    case "Sign Up":
      return (state = true);
    case "Sign Out":
      return (state = false);
    default:
      return state;
  }
};

export default IsLogged;
