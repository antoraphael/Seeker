import React from "react";
import NavBar from "../nav";
import { Button } from 'react-bootstrap';



export default class LifecycleDemo extends React.Component {
constructor (props) {
    super(props)

    this.state = {
        counter: 0
    }

    this.increment = () => this.setState({counter: this.state.counter+1});
    this.decrement = () => this.setState({counter: this.state.counter-1});
}

    render() {
      return (
          <div>
      <NavBar />
      <div className="mt-3"></div>
      <Button variant="outline-primary" onClick = {this.increment}>increment</Button>
      <Button variant="outline-secondary" onClick = {this.decrement}>decrement</Button>

<p className="pt-5">count  {this.state.counter}</p>

      </div>
      );
    }
  }
 
