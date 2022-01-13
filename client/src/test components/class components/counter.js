import React from "react";
import { Button } from "react-bootstrap";

const ErrorComponent = () => {
    <div>{props.ignore}</div>
}


export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }


  // Lifecycle components ---------------------
  componentDidMount() {
    console.log("mounted");
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("updated");
  }

  componentWillUnmount() {
    console.log("unmounted");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("Should component update = NO");
      return false;
    }
    console.log("Should component update = YES");
    return true;
  }

    
  componentDidCatch(error, info) {
    console.log("componet did catch error");

    this.setState({error, info})
  } 
  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }


  render() {
      console.log("Render", this.state.error);
    if(this.props.showErrorComponent && this.state.error){
       return <div>An error has occured : {this.state.error.message}</div>
    }
    return (
      
      <div>
        <div className="mt-3"></div>
        <Button variant="outline-primary" onClick={this.increment}>
          increment
        </Button>
        <Button variant="outline-secondary" onClick={this.decrement}>
          decrement
        </Button>

        <p className="pt-5">count {this.state.counter}</p>
        {this.props.showErrorComponent ? <ErrorComponent /> : null }
      </div>
    );
  }


}
