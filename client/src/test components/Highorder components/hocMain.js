import React, { Component } from "react";
import { Button } from "react-bootstrap";
import NavBar from "../nav";
import Countme from "./count";
import Hoverme from "./hover";

const HocMain = () => {
  return (
    <div>
      <NavBar />
      <div className="mt-3">
        <Countme />
        <Hoverme />
      </div>
    </div>
  );
};

export default HocMain;
