import { useSelector, useDispatch } from "react-redux";
import { getMovies, setMovieName } from "../features/movies/moviesSlice";
import type { RootState } from "../app/store";

const SearchBar = () => {
  const dispatch = useDispatch();
  const moviesState = useSelector((state: RootState) => state.movies);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(getMovies(moviesState.movieName) as any);
  };

  return (
    <div className="searchBar_container">
      <form className="searchBar_form" onSubmit={handleSubmit}>
        <input 
         className="searchBar_textInput"
         type="text"
         value={moviesState.movieName}
         onChange={(e)=>dispatch(setMovieName({value: e.target.value}))}
         />
        <button className="searchBar_submitButton" type="submit" value='searchMovie'>Search Movie</button>
      </form>
    </div>
  );
};

export default SearchBar;
