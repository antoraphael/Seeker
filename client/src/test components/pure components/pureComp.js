import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
  render() {
    console.log("pure comp");
    return <div>pure component {this.props.name}</div>;
  }
}
