import React, { useEffect, useState } from "react";
import styles from './MovieForm.module.css';

function MovieForm({ initialMovie, onSubmit }) {
  const [movie, setMovie] = useState(initialMovie || {});

  useEffect(() => {
    setMovie(initialMovie || {});
  }, [initialMovie]);

  // immutable state update
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit callback and pass the movie data
    onSubmit(movie);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label className={styles.label}>Title:</label>
        <input
          type="text"
          name="title"
          value={movie.name || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label}>Release Year:</label>
        <input
          type="text"
          name="releaseYear"
          value={movie.year || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label}>MovieURL:</label>
        <input
          type="text"
          name="movieUrl"
          value={movie.pictureURL || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label}>Duration:</label>
        <input
          type="text"
          name="duration"
          value={movie.runtime || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label}>Description:</label>
        <textarea
          name="description"
          value={movie.overview || ""}
          onChange={handleChange}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} type="submit">
        Save
      </button>
      </div>
    </form>
  );
}

export default MovieForm;
