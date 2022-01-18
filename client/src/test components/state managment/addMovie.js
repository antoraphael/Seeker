import React, { useState, useContext } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { MovieContext } from "./movieContext";

const AddMovies = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const addName = (e) => {
    setName(e.target.value);
  };
  const addYear = (e) => {
    setYear(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, year: year }]);
  };

  return (
    <div className="container">
      <Form noValidate onSubmit={addMovie}>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>movie name</Form.Label>
          <Form.Control
            required
            placeholder="movie name"
            value={name}
            name="name"
            onChange={addName}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>movie year</Form.Label>
          <Form.Control
            required
            placeholder="year"
            value={year}
            name="year"
            onChange={addYear}
          />
        </Form.Group>

        {/* {movies.map((movie) => (
          <Form.Control required placeholder="year" value={movie.year} />
        ))} */}

        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
};

export default AddMovies;
