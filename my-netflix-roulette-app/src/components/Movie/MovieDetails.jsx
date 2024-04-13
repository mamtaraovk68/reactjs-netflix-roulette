import React, { Component } from "react";
import PropTypes from "prop-types";
import "./movie.css";

class MovieDetails extends Component {
  render() {
    const { poster_path, title, release_date, vote_average, runtime, overview } =
      this.props.movieInfo;

    return (
      <div className="movie-details">
        <div className="movie-poster">
          <img src={poster_path} alt={poster_path} />
        </div>
        <div className="movie-info">
          <h2>{title}</h2>
          <p>Release Year: {release_date}</p>
          <p>Rating: {vote_average}</p>
          <p>Duration: {runtime}</p>
          <p>{overview}</p>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetails;