import "./App.css";
import "./index.css";
import CounterApp from "./components/Counter/counter";
import SearchApp from "./components/SearchForm/search";
import MoviesList from "./components/Movie/MovieList";
import { useState } from "react";
import "./components/Header/header.css";
import SortAndGenreControl from "./components/SortAndGenreControl/SortAndGenreControl";
import AddMovie from "./components/Movie/AddMovie/AddMovie";
import Footer from "./components/Footer/footer";
import Logo from "./components/Logo/logo";
import { CounterDialog } from "./components/Counter/CounterDialog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [currentSort, setCurrentSort] = useState("releaseDate");

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchString, setSearchString] = useState("");

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSearch = (query) => {
    setSearchString(query);
    console.log("Query", query);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSortChange = (sortOption) => {
    setCurrentSort(sortOption);
  };

  return (
    <div className="div-container">
      <Router>
        <Logo />
        <AddMovie />
        <CounterDialog />
        <SearchApp
          initialQuery="What do you want to search"
          onSearch={handleSearch}
        />

        <SortAndGenreControl
          genres={["All", "Documentary", "Comedy", "Horror", "Crime"]}
          selectedGenre={selectedGenre}
          onSelect={handleGenreSelect}
          currentSort={currentSort}
          onSortChange={handleSortChange}
        />

        <Routes>
          <Route path='/' element={
              <MoviesList
                searchString={searchString}
                selectedGenre={selectedGenre}
                currentSort={currentSort}
              />
            }
           />

          <Route path='/:movieIdParam' element={<MoviesList
                searchString={searchString}
                selectedGenre={selectedGenre}
                currentSort={currentSort}
              />}/>

          <Route path='*' element={<ErrorPage />}/>
         
        </Routes>
      </Router>

      <br />

      <br />
      <Footer />
    </div>
  );
}
export default App;
