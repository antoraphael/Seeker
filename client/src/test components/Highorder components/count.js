import React, { Component } from "react";
import { Button } from "react-bootstrap";
import HighOrderComponent from "./HOC";

class Countme extends React.Component {
  render() {
    const { count, incrementCount, name } = this.props;
    return (
      <div>
        <Button
          variant="outline-primary"
          className="mt-4"
          onClick={incrementCount}
        >
          {name} counted {count} times
        </Button>
      </div>
    );
  }
}

export default HighOrderComponent(Countme);
