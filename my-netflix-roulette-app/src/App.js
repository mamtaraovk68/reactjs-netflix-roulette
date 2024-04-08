import './App.css';
import './index.css';
import CounterApp from './components/Counter/counter';
import SearchApp from './components/SearchForm/search';

import MoviesList from './components/Movie/MovieList';
import { useState } from 'react';
import './components/Header/header.css';
import SortAndGenreControl from './components/SortAndGenreControl/SortAndGenreControl';
import Dialog from './components/Dialog/Dialog';
import MovieForm from './components/MovieForm';

function App(){
  
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [currentSort, setCurrentSort] = useState('releaseDate');
 
  const [movieData, setMovieData] = useState(null); // Add state to manage movie data


  const handleSearch = (query) => {
    alert(`Searching for: ${query}`);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    alert(`Selected genre: ${genre}`);
  };

  const handleSortChange = (sortOption) => {
    setCurrentSort(sortOption);
    alert(`Sorted By: ${sortOption}`);
  };

  const[isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = ()=>{
    setIsDialogOpen(true);
  }

  const closeDialog = ()=>{
     setIsDialogOpen(false);
  }

  const handleMovieFormSubmit = (data) => {
    closeDialog();
    alert(`Submiting data: ${data}`);
  };

  return (
    <div className="div-container">
      <button className="add-movie-button" onClick={openDialog}>Add Movie</button>
      {isDialogOpen && (
          <Dialog title="ADD MOVIE" onClose={closeDialog}>
            <MovieForm initialMovie={movieData} onSubmit={(data) => handleMovieFormSubmit(data)}/>
          </Dialog>
      )}
      <CounterApp initialValue={10} />
      <SearchApp initialQuery="What do you want to search" onSearch={handleSearch} />
      
      <SortAndGenreControl
        genres={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
        currentSort={currentSort}
        onSortChange={handleSortChange}
      />

      <br />
      <MoviesList  onMovieEdit={openDialog} />
      <br />
    </div> 
  );
}
export default App;
