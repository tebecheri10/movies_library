import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMovies, setMovieName } from "../features/movies/moviesSlice";
import { showSpinner} from "../features/spinner/spinnerSlice";
import { Link } from 'react-router-dom'
import { isValidInput } from '../utils/searchUtils';
import type { RootState } from "../app/store";

import searchIcon from '../assets/searchIcon.svg'
import movieLibraryIcon from '../assets/movie-library-icon.jpg'

const SearchBar = () => {
  
  //Context
  const dispatch = useDispatch();
  const moviesState = useSelector((state: RootState) => state.movies);
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    let movieName = moviesState.movieName
    
    if(isValidInput(movieName)){
      navigate("/")
      dispatch(showSpinner(true))
      await dispatch(getMovies(movieName) as any);
      dispatch(showSpinner(false))
    }
  };

  return (
    <div className="searchBar_container">
      <div className="serachBar_wrapper">
      <Link to="/">
        <img className="searchBar_icon" src={movieLibraryIcon} alt="serach icon" />
      </Link>
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
    </div>
  );
};

export default SearchBar;
