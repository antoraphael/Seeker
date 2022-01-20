import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import NavBar from "../nav";

const MainAxios = () => {
  const [datum, setData] = useState([]);
  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };
  return (
    <div>
      <NavBar />
      <p>this is an axios test page</p>
      <Button onClick={getData}>get data</Button>
      <div>
        <p
          className="w-100 overflow-auto"
          style={{ height: "299px !important", backgroundColor: "grey" }}
        >
          the data are:
          {datum.map((data) => (
            <div className="d-flex">
              <p className="p-3">{data.id}</p>
              <p className="p-3">{data.title} </p>
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default MainAxios;
