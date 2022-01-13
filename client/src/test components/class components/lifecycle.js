import React from "react";
import NavBar from "../nav";
import { Button } from "react-bootstrap";
import Counter from "./counter";

export default class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignorProp: 0,
      seed: 40,
      showErrorComponent: false,
    };

    this.mount = () => this.setState({ mount: true });
    this.unmount = () => this.setState({ mount: false });

    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
    this.seed = () => this.setState({ seed: Number.parseInt(Math.random() * 100) });
    this.toogleError = () => this.setState({showErrorComponent: !this.state.showErrorComponent})
  }

  render() {
    return (
      <div>
        <NavBar />

        <div className="pb-3">
          <Button variant="outline-primary" onClick={this.mount}>
            mount
          </Button>
          <Button variant="outline-secondary" onClick={this.unmount}>
            unmount
          </Button>
          <Button variant="outline-secondary" onClick={this.ignoreProp}>
            ignore
          </Button>
          <Button variant="outline-secondary" onClick={this.seed}>
            seed
          </Button>
          <Button variant="outline-secondary" onClick={this.toogleError}>
            toogle error
          </Button>
        </div>
        <div>
          {this.state.mount ? (
            <Counter
              seed={this.state.seed}
              ignoreProp={this.state.ignoreProp}
              showErrorComponent={this.state.showErrorComponent}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
