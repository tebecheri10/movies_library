import React, { FC } from "react";
import { Link } from "react-router-dom";

interface MovieCardProps {
  id: string
  imgSrc: string;
  showName: string;
}

const MovieCard: FC<MovieCardProps> = ({id, imgSrc, showName }) => {
  return (
    <Link to={`/movie/${id}`} key={id}>
      <div>
        <p>{showName}</p>
        <img src={imgSrc} alt="movie image" />
      </div>
    </Link>
  );
};

export default MovieCard;
