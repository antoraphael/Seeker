import React, { Component } from "react";
import { Button } from "react-bootstrap";
import HighOrderComponent from "./HOC";

class Hoverme extends React.Component {
  render() {
    const { count, incrementCount, name } = this.props;
    return (
      <div>
        <Button
          variant="outline-primary"
          className="mt-4"
          onMouseOver={incrementCount}
        >
          {name} hovered {count} times
        </Button>
      </div>
    );
  }
}

export default HighOrderComponent(Hoverme);
