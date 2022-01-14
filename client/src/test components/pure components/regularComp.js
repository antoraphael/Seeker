import React, { Component } from "react";

export default class RegularComp extends React.Component {
  render() {
    console.log("regular comp");
    return <div>regular component {this.props.name}</div>;
  }
}
