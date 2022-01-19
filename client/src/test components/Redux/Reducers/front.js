import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { increment, decrement } from "../Actions/countAction";
import { LoggedIn, LoggedOut } from "../Actions/authAction";

const ReFront = () => {
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>This is a redux state managment study page</h1>
      <p className="mt-3">counter :{counter}</p>
      <p className="mt-3">
        Am i logged in? {console.log(auth)}
        {auth ? (
          <p style={{ color: "green" }}>Yes you are</p>
        ) : (
          <p style={{ color: "red" }}>Nope!</p>
        )}
      </p>

      <div className="d-flex">
        <div className="col-md-6">
          <p>Add counter</p>
          <Button className="m-2" onClick={() => dispatch(increment(5))}>
            +
          </Button>
          <p>Reduce counter</p>
          <Button className="m-2" onClick={() => dispatch(decrement())}>
            -
          </Button>
        </div>
        <div className="col-md-6">
          <Button className="m-2" onClick={() => dispatch(LoggedIn())}>
            Login
          </Button>
          <Button className="m-2" onClick={() => dispatch(LoggedOut())}>
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReFront;
