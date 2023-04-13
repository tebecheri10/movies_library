import React, { FC } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import type { RootState } from "../../app/store";

const MoviesList: FC = () => {
  const moviesState = useSelector((state: RootState) => state.movies);

  return (
    <div>
      {moviesState.completeList.map((movie: any) => (
        <MovieCard
          id={movie?.show?.id}
          imgSrc={movie?.show?.image?.original}
          showName={movie.show.name}
        />
      ))}
    </div>
  );
};

export default MoviesList;
