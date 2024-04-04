import React from "react";
import "./AddMovie.css";
import Dialog from "../../Dialog/Dialog";
import MovieForm from "../../MovieForm";
import { useState } from "react";

const AddMovie = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [movieData, setMovieData] = useState(null); // Add state to manage movie data
  
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleMovieFormSubmit = (data) => {
    closeDialog();
    alert(`Submiting data: ${data}`);
  };

  return (
    <div>
      <button className="add-movie-button" onClick={openDialog}>
        Add Movie
      </button>
      {isDialogOpen && (
        <Dialog title="ADD MOVIE" onClose={closeDialog}>
          <MovieForm
            initialMovie={movieData}
            onSubmit={(data) => handleMovieFormSubmit(data)}
          />
        </Dialog>
      )}
    </div>
  );
}


export default AddMovie;