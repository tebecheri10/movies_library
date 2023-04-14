import React, { FC } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import type { RootState } from "../../app/store";

const MoviesList: FC = () => {
  const moviesState = useSelector((state: RootState) => state.movies);

  console.log(moviesState.completeList)

  return (
    <div  className="movieList_container">
      {moviesState.completeList.map((movie: any) => (
        <MovieCard
          id={movie?.show?.id}
          imgSrc={movie?.show?.image?.original}
          showName={movie?.show?.name}
          genres={movie?.show?.genres}
          country={movie?.show?.network?.country?.name}
          premiered={movie?.show?.premiered?.slice(0,4)}
          />
      ))}
    </div>
  );
};

export default MoviesList;
