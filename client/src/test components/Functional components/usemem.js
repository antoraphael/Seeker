import React, { useState, useMemo } from "react";
import NavBar from "../nav";
import { Button } from "react-bootstrap";

const Usemem = () => {
  const [dark, setDark] = useState();
  const [number, setNumber] = useState();
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  //   const doubleNumber = slowFunction(number);
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div>
      <NavBar />
      <div className="mt-3">
        <p className="h3">Use memo</p>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <Button
          variant="outline-primary"
          onClick={() => setDark((prevDark) => !prevDark)}
        >
          change theme
        </Button>
        <p style={themeStyle}> number is: {doubleNumber} </p>
      </div>
    </div>
  );
};

function slowFunction(number) {
  for (let i = 0; i <= 1000000000; i++) {}
  return number * 2;
}

export default Usemem;
