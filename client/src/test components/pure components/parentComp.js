import React, { Component } from "react";
import PureComp from "./pureComp";
import RegularComp from "./regularComp";
import NavBar from "../nav";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ARZ",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "ARZ",
      });
    }, 2000);
  }
  render() {
    console.log("parent comp rendered -----------------------------");
    return (
      <div>
        <NavBar />
        <p className="h3 mb-4 mt-3">Parent Component</p>
        <PureComp name={this.state.name} />
        <RegularComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
