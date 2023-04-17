import React, { FC , useState} from "react";
import { Link } from "react-router-dom";
import imagePlaceholder from '../../assets/image-placeholder.jpg'

interface MovieCardProps {
  id: string;
  imgSrc: string;
  showName: string;
  genres: [string];
  country: string;
  premiered: string;
}

const MovieCard: FC<MovieCardProps> = ({
  id,
  imgSrc,
  showName,
  genres,
  country,
  premiered,
}) => {
  
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <div className="movieCard_container">
        <Link to={`/movie/${id}`} key={id} className="movieCard_link">
          {!imageLoaded && (
            <img
              src={imagePlaceholder}
              alt="placeholder"
              className="movieCard_frontImage"
              loading="lazy"
            />
          )}
          <img
            src={imgSrc}
            alt="movie image"
            className="movieCard_frontImage"
            onLoad={handleImageLoaded}
            style={{ display: imageLoaded ? 'inline-block' : 'none' }}
          />
          <div className="moviCard_infoContainer">
            <p className="movieCard_showName">{showName}</p>
            <p className="movieCard_extraInfo">
              {`${genres[0]} - `}
              {`${country} - `}
              {premiered}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
