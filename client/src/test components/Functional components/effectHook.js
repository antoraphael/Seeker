import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import NavBar from "../nav";


const EffectHook = () => {
    const [resourceType, setResourceType] = useState('posts');

  fetch(`https://jsonplaceholder.typicode.com/todos/1/${resourceType}`)
    .then((response) => response.json())
    .then((json) => console.log(json));
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
  console.log("rendered");

  useEffect(() => {
    console.log("type changed");
  }, [resourceType]);

  return (
    <div>
      <NavBar />
      <div className="container pt-3">
        <Button variant="outline-primary" onClick={() => setResourceType("posts")}>
          {" "}
          type1
        </Button>
        <Button variant="outline-primary" onClick={() => setResourceType("users")}>
          type2
        </Button>
        <Button variant="outline-primary" onClick={() => setResourceType("comments")}>
          type3
        </Button>

        <p className="h3">{resourceType}</p>
      </div>
    </div>
  );
};

export default EffectHook;
