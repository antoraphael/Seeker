import React, { Component } from "react";

export default class RegularComp extends Component {
  render() {
    console.log("regular comp");
    return <div>regular component {this.props.name}</div>;
  }
}
