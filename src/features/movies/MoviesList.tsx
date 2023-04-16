import { FC } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import EmptyListMessage from "../../components/EmptyListMessage";
import Spinner from "../../components/Spinner";
import type { RootState } from "../../app/store";

const MoviesList: FC = () => {
  const moviesState = useSelector((state: RootState) => state.movies);
  const spinnerState = useSelector((state: RootState) => state.spinner);

  return (
    <div className="movieList_container">
      {spinnerState.showSpinner ? (
        <Spinner />
      ) : moviesState?.completeList.length < 1 ? (
        <EmptyListMessage />
      ) : (
        moviesState?.completeList?.map((movie: any) => (
          <MovieCard
            key={movie?.show?.id}
            id={movie?.show?.id}
            imgSrc={movie?.show?.image?.original}
            showName={movie?.show?.name}
            genres={movie?.show?.genres}
            country={movie?.show?.network?.country?.name}
            premiered={movie?.show?.premiered?.slice(0, 4)}
          />
        ))
      )}
    </div>
  );
};

export default MoviesList;
