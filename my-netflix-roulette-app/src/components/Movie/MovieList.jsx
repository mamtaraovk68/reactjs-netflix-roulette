import React, { Component, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./movie.css";
import axios from "axios";
import { GET_MOVIES_ENDPOINT } from "../Constants";

function MoviesList({ searchString, selectedGenre, currentSort }) {
  const [offsetVar, setOffsetVar] = useState(0);
  const limit = 8;
  const [movieListResponse, setMovieListResponse] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const currentPage = Math.floor(offsetVar / limit) + 1;
  const totalPages = Math.ceil(totalAmount / limit);

  const fetchMovieList = async () => {
    try {
      const params = {
        search: searchString,
        searchBy: searchString ? "title" : "genres",
        offset:  offsetVar , // Use the updated offset from state
        limit: limit,
        sortBy: currentSort,
        sortOrder: "desc",
        filter: searchString
          ? null
          : selectedGenre === "All"
          ? null
          : selectedGenre,
      };

      console.log("Params: ", params);

      const response = await axios.get(GET_MOVIES_ENDPOINT, {
        params,
      });
      console.log("Response: ", response);
      setMovieListResponse(response.data.data);
      setTotalAmount(response.data.totalAmount);
      console.log("Actual response: ", response.data.totalAmount);
      console.log("totalAmount: ", totalAmount);
    } catch (error) {
      console.log("error fetching data from backend", error);
    }
  };

  useEffect(() => {
    console.log("inside useffect");
    console.log(searchString);
    fetchMovieList();
  }, [searchString, currentSort,  offsetVar, selectedGenre]);


  const handlePreviousPage = () => {
    if (offsetVar - limit >= 0) {
      setOffsetVar(offsetVar - limit);
    }
  };

  const handleNextPage = () => {
    setOffsetVar(offsetVar + limit);
  };


  return (
    <div>
      <section className="movieslist">
        {movieListResponse !== null &&
          movieListResponse.map((input) => (
            <article key={input.id} className="moviecard">
              <MovieCard
                id={input.id}
                pictureURL={input.poster_path}
                tagline={input.tagline}
                name={input.title}
                year={input.release_date}
                genres={input.genres}
                overview={input.overview}
                runtime={input.runtime}
                film={input}
              />
            </article>
          ))}
      </section>
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={handlePreviousPage}
          disabled={offsetVar === 0}
        >
          Previous
        </button>
        <div className="page-numbers">
          Page {currentPage} of {totalPages}
        </div>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={offsetVar + limit >= totalAmount}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default MoviesList;
