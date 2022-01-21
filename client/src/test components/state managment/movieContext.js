import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieList = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "movie 1",
      id: "345",
      year: "2011",
    },
    {
      name: "movie 2",
      id: "543",
      year: "2061",
    },
    {
      name: "movie 3",
      id: "7645",
      year: "2021",
    },
  ]);

  return (
    <div>
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </div>
  );
};

// export const SeriesContext = createContext();

// export const SeriesList = (props) => {
//   const [series, setSeries] = useState([
//     {
//       name: "series 1",
//       id: "345",
//       year: "2011",
//     },
//     {
//       name: "series 2",
//       id: "543",
//       year: "2061",
//     },
//     {
//       name: "series 3",
//       id: "7645",
//       year: "2021",
//     },
//   ]);

//   return (
//     <SeriesContext.Provider value={[series, setSeries]}>
//       {props.children}
//     </SeriesContext.Provider>
//   );
// };
