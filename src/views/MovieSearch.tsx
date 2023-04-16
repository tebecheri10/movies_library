import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from '../features/movies/MoviesList';
import SearchBar from '../components/SearchBar';
import MovieDetail from './MovieDetail';
import { useLocation  } from "react-router-dom";
import '../main.scss';

function MovieSearch() {

  return (
    <Router>
      <div className="App">
        <SearchBar />
        <Routes>
          <Route  path="/" element={<Movies/>} />
          <Route  path="/movie/:id" element={<MovieDetail/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default MovieSearch;