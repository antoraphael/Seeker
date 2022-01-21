import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import StateMhead from "./header";
import StateMovie from "./movie";
import { MovieContext } from "./movieContext";
import AddMovies from "./addMovie";

const StateMovies = () => {
  const [movies, setMovies] = useContext(MovieContext);
  // const [series, setSeries] = useContext(SeriesContext);

  return (
    <div>
      <StateMhead />
      <h1>State Managment</h1>
      <h3>Movies</h3>
      <div className="d-flex">
        <div className="col-md-6">
          {movies.map((movie) => (
            // <div>
            //   <p>Movie name: {movie.name}</p>
            //   <p>released date: {movie.year}</p>
            // </div>
            <StateMovie name={movie.name} year={movie.year} key={movie.id} />
          ))}
        </div>
        {/* <div className="col-md-6">
          {series.map((serial) => (
            <div>
              <p>Movie name: {serial.name}</p>
              <p>released date: {serial.year}</p>
            </div>
            // <StateMovie name={movie.name} year={movie.year} key={movie.id} />
          ))}
        </div> */}
        <div className="col-md-6">
          <AddMovies />
        </div>
      </div>
    </div>
  );
};

export default StateMovies;
