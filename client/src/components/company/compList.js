import React from "react";
import { Button, Table, Pagination } from "react-bootstrap";
import CompNav from "./compNav";
const CompList = () => {
  return (
    <div>
      <CompNav />
      <div className="container">
        <h2>Candidates applied</h2>
        <Table striped bordered hover size="sm" className="mt-5">
          <thead>
            <tr>
              <th>Sno</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Expeirence</th>
              <th>Skills</th>
              <th>CTC</th>
              <th>Period of notice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>4 years</td>
              <td>PHP</td>
              <td>₹ 344444</td>
              <td>4 months</td>
              <td>
                <Button>Select</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>4 years</td>
              <td>PHP</td>
              <td>₹ 344444</td>
              <td>4 months</td>
              <td>
                <Button>Select</Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>4 years</td>
              <td>PHP</td>
              <td>₹ 344444</td>
              <td>4 months</td>
              <td>
                <Button>Select</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
};

export default CompList;
