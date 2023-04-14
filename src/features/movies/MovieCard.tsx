import React, { FC } from "react";
import { Link } from "react-router-dom";

interface MovieCardProps {
  id: string;
  imgSrc: string;
  showName: string;
  genres: [string]
  country: string
  premiered: string
}

const MovieCard: FC<MovieCardProps> = ({ id, imgSrc, showName, genres,country, premiered }) => {
  return (
    <div className="movieCard_container">
      <Link to={`/movie/${id}`} key={id} className="movieCard_link">
        <img src={imgSrc} alt="movie image" className="movieCard_frontImage" />
        <div className="moviCard_infoContainer">
        <p className="movieCard_showName">{showName}</p>
      <p  className="movieCard_extraInfo">{`${genres[0]} - `}{`${country} - `}{premiered}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
