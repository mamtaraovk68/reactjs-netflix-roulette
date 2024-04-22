import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import MovieImage from "./MovieImage";
import MovieInfo from "./MovieInfo";
import "./movie.css";
import Dialog from "../Dialog/Dialog";
import MovieForm from "../MovieForm";
import 'font-awesome/css/font-awesome.min.css';
import axios from "axios";
import { useNavigate, useSearchParams } from 'react-router-dom'; 
import { useState } from "react";



function MovieCard(props) {
  const [showEditMenu, setShowEditMenu] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);


  const  navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const toggleEditMenu = () => {
    setShowEditMenu((prevShowEditMenu) => !prevShowEditMenu);
  };

  const openEditDialog = (movieData) => {
    setMovieData(movieData);
    setIsEditDialogOpen(true);
    setShowEditMenu(false);
  };

  useEffect(() => {

    if(isEditDialogOpen){
      console.log("Hi")
      const movieId = movieData.id;
      const params = new URLSearchParams(searchParams);
      const addNewPath = `/edit/${movieId}?${params.toString()}`;
      navigate(addNewPath);
      console.log(isEditDialogOpen);
    }
  }, [isEditDialogOpen, movieData]) 

 

  const closeEditDialog = () => {
    setIsEditDialogOpen(false);
    removeMovieIdFromPath();
  };

  const closeEditMenu = () => {
    setShowEditMenu(false); 
  };

  const removeMovieIdFromPath = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const newPath = `/`;
    const newUrl = `${newPath}?${urlParams.toString()}`;
    window.history.pushState({}, '', newUrl);
  }

  // Function to open the delete confirmation dialog
  const openDeleteDialog = () => {
    setIsDeleteDialogOpen(true);
    setShowEditMenu(false);
  
  };

  // Function to close the delete confirmation dialog
  const closeDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  const handleDelete = () => {
    setIsDeleteDialogOpen(false);
  };

  const handleEditMovieSubmission =  async (data) => {
      closeEditDialog();
      alert(`Editing data: ${JSON.stringify(data)}`);
      const {action, ...formData} = data;
      try {
        const response = await axios.put("http://localhost:4000/movies", formData);
      } catch (error) {
        console.error("Error adding movie:", error);
      }
      console.log("Successfully edited movie!!");
  }
  
    return (
      <div className="movie-card" onMouseLeave={closeEditMenu}>
        
      <div className="dots-overlay" onClick={toggleEditMenu}>
         <i className="fa fa-ellipsis-v"></i>
      </div>
      {showEditMenu && (
        <div className="edit-menu">
          <div className="edit-option" onClick={() => openEditDialog(props.film)}>
            Edit Movie
          </div>
          <div className="edit-option" onClick={openDeleteDialog}>Delete Movie</div> {/* Open delete confirmation dialog */}
        </div>
      )}
      <MovieImage
        toggleShowFilmBody={props.toggleShowFilmBody}
        img={props.pictureURL}
        filmTitle={props.name}
        film={props.film}
      />
      <MovieInfo
        description={props.tagline}
        name={props.name}
        year={props.year}
      />
      {isEditDialogOpen && (
     
        <Dialog title="Edit Movie" onClose={closeEditDialog}>
          <MovieForm
            initialMovie={movieData}
            onSubmit={(data) => {
              // Handle editing movie data here
              console.log("Editing movie data:", data);
              console.log("Editing movie data:", data.action);
             handleEditMovieSubmission(data);
            }}
            typeOfAction={'edit'}
          />
        </Dialog>
      )}
      {isDeleteDialogOpen && (
        <Dialog title="DELETE MOVIE" onClose={closeDeleteDialog}>
          <div>
          Are you sure you want to delete this movie?
          </div>
          <div className="delete-dialog-buttons">
            <button onClick={handleDelete}>Confirm</button> &nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            <button onClick={closeDeleteDialog}>Cancel</button>
          </div>
        </Dialog>
      )}
    </div>
    );
  }
MovieCard.propTypes = {
  genres: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  pictureURL: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  film: PropTypes.object.isRequired,
};
export default MovieCard;