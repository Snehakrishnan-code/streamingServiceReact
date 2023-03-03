import React from "react";
import { useState, useEffect } from "react";
import instance from "./baseUrl";
import axios from "axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  //function to call api     --- start with instance + fetch url  -- call with instance
  async function getData() {
    const outData = await instance.get(fetchUrl);
    // console.log(result.data.results);
    setMovies(outData.data.results);
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(movies);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="movies">
        {movies.map((movie) => (
          <img
            className={`movie ${isLargeRow && "largeMovie"}`}   // for different css styling.. we use && to give 2 different styling
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.original_title} // in case img is not loaded..alt content will come
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
