import React, { useState } from "react";
import { Button, Table } from 'react-bootstrap';
import NavBar from "../nav";

const FunComp = () => {
    const [test, setTest] = useState();
    const [count, setCount] = useState(0);

    return(
     
        <div>
           <NavBar/>
  <div><p className="h2 pb-3">React useState</p></div>         
 <Button variant="outline-primary" onClick = {() => setTest(!test)}>
          Click Here!
        </Button>
{test?<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>  : 
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>



}
<div className="pt-5">
      <p>You clicked {count} times</p>
      <Button variant="outline-primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
        </div>

    );
}

export default FunComp;