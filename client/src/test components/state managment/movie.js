import React, { Component } from "react";
import { Button } from "react-bootstrap";
import StateMhead from "./header";

const StateMovie = (props) => {
  return (
    <div className="d-flex ">
      <p className="p-2">Movie name: {props.name},</p>
      <p className="p-2">released date: {props.year}</p>
    </div>
  );
};

export default StateMovie;
