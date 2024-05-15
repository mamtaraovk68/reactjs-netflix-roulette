import React from "react";
import "./AddMovie.css";
import Dialog from "../../Dialog/Dialog";
import MovieForm from "../../MovieForm";
import { useState } from "react";
import axios from "axios";
import { MOVIES_ENDPOINT } from "../../Constants";
import { useNavigate, useSearchParams } from 'react-router-dom'; 

const AddMovie = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [isSuccessDialog, seIsSuccessDialog] = useState(false);

  const [movieData, setMovieData] = useState(null); // Add state to manage movie data

  const [newMovieId, setNewMovieId] = useState('');

  const [action, setAction] = useState('add');

  const navigate = useNavigate();


  const [searchParams, setSearchParams] = useSearchParams();

  const openDialog = () => {
    setIsDialogOpen(true);
    updatePathForAddMovieForm();
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    console.log("Close diaglog");
    removePathParam();
  };

  const updatePathForAddMovieForm = () => {
    const params = new URLSearchParams(searchParams);
    const addNewPath = `/new?${params.toString()}`;
    navigate(addNewPath);
  }

  const openSuccessDialog = () => {
     seIsSuccessDialog(true);
  }

  const closeSuccessDialog = () => {
    seIsSuccessDialog(false);
    const params = new URLSearchParams(searchParams);
     console.log(params.toString());
     const newUrl = `/${newMovieId}?${params.toString()}`;
     navigate(newUrl);

 }

  const handleMovieFormSubmit = async (data) => {
    closeDialog();
    alert(`Submitting data: ${JSON.stringify(data)}`);
    try {
      const response = await axios.post("http://localhost:4000/movies", data);
      setNewMovieId(response.data.id);
    } catch (error) {
      console.error("Error adding movie:", error);
    }
    console.log("Successfully added movie!!");
    openSuccessDialog();
  };

  const removePathParam = () => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.toString());
    const newPath = '/';
    const newUrl = `${newPath}?${urlParams.toString()}`;
    console.log(newUrl.toString());
    window.history.pushState({}, '', newUrl);
  }

  return (
    <div>
      <button className="add-movie-button" onClick={openDialog}>
        Add Movie
      </button>
      {isDialogOpen && (
        <Dialog title="ADD MOVIE" onClose={closeDialog}>
          <MovieForm
            initialMovie={movieData}
            typeOfAction={action}
            onSubmit={(data) => handleMovieFormSubmit(data)}
          />
        </Dialog>
      )}
      {isSuccessDialog && (
        <Dialog title="CONGRATULATIONS" onClose={closeSuccessDialog} children="The movie has been added to the database succesfully!!"></Dialog>
      )}
    </div>
  );
};

export default AddMovie;
