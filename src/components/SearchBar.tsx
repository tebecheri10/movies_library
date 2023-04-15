import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMovies, setMovieName } from "../features/movies/moviesSlice";
import type { RootState } from "../app/store";

import searchIcon from '../assets/searchIcon.svg'

const SearchBar = () => {
  const dispatch = useDispatch();
  const moviesState = useSelector((state: RootState) => state.movies);

  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    navigate("/")
    event.preventDefault();
    dispatch(getMovies(moviesState.movieName) as any);
  };

  return (
    <div className="searchBar_container">
      <form className="searchBar_form" onSubmit={handleSubmit}>
        <input 
         className="searchBar_textInput"
         type="text"
         placeholder="Search"
         value={moviesState.movieName}
         onChange={(e)=>dispatch(setMovieName({value: e.target.value}))}
         />
         
        <button className="searchBar_submitButton" type="submit" value='searchMovie'><img src={searchIcon} alt="search icon" className="searchBar_searchIcon" /></button>
      </form>
    </div>
  );
};

export default SearchBar;
