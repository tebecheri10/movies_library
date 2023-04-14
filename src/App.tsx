import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './features/movies/MoviesList';
import SearchBar from './components/SearchBar';
import MovieDetail from './views/MovieDetail';
import './main.scss';

function App() {
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

export default App;