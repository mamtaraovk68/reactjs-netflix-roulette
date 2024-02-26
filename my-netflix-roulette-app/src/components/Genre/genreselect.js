import React from 'react';
import './genre.css'

function GenreSelect({ genres, selectedGenre, onSelect }) {
  return (
    <div className="genre-select">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelect(genre)}
          className={`genre-button ${genre === selectedGenre ? 'red' : 'white'}`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreSelect