import './App.css';
import './index.css';
import CounterApp from './components/Counter/counter';
import SearchApp from './components/SearchForm/search';

import MoviesList from './components/Movie/MovieList';
import { useState } from 'react';
import './components/Header/header.css';
import SortAndGenreControl from './components/SortAndGenreControl/SortAndGenreControl';

function App(){
  
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [currentSort, setCurrentSort] = useState('releaseDate');

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


  return (
    <div className="div-container">
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
      <MoviesList  />
      <br />
    </div>  
  );
}
export default App;
