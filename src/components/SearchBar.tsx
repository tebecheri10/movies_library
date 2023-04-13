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
    <div>
      <h2>Search content</h2>
      <form onSubmit={handleSubmit}>
        <input 
         type="text"
         value={moviesState.movieName}
         onChange={(e)=>dispatch(setMovieName({value: e.target.value}))}
         />
        <button type="submit" value='searchMovie'>Search Movie</button>
      </form>
    </div>
  );
};

export default SearchBar;
