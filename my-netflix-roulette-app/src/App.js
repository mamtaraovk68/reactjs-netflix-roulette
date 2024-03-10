import './App.css';
import './index.css';
import CounterApp from './components/Counter/counter';
import SearchApp from './components/SearchForm/search';
import GenreSelect from './components/Genre/genreselect';
import { useState } from 'react';

function App(){

  const genres = ['All', 'Action', 'Romance', 'Horror' , 'Adventure', 'Comedy', 'Drama', 'Sci-Fi'];
  const [selectedGenre, setSelectedGenre] = useState('All');

  const handleSearch = (query) => {
    // Replace with exact search logic
    alert(`Initiated a search for your movie: ${query}`);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    alert(`Performing a search for selected genre: ${genre}`);
  };


  return (
    <div className="App-container">
      <CounterApp initialValue={10} />
      <SearchApp initialQuery="Lucy" onSearch={handleSearch} />
      <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />
    </div>
  );
}
export default App;
