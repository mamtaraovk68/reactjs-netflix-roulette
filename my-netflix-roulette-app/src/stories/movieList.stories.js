import React from "react";
import moviesData from "../data/movies.json";
import MoviesList from "../components/Movie/MovieList";

export default {
  title: "MoviesList",
  component: MoviesList,
};

export const WithMovieData = () => <MoviesList moviesData={moviesData} />;