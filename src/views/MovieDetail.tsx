import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieExtraData } from "../features/movies/moviesSlice";
import { setSpinnerValue } from "../features/spinner/spinnerSlice";
import { useParams } from "react-router-dom";
import type { RootState } from "../app/store";

import Banner from "../components/movieDetail/Banner";
import CastTable from "../components/movieDetail/CastTable";
import Spinner from "../components/Spinner";

import calendarIcon from "../assets/calendar-icon.png";
import imdbIcon from "../assets/imdb-icon.png";

const MovieDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const moviesState = useSelector((state: RootState) => state.movies);
  const spinnerState = useSelector((state: RootState) => state.spinner);

  const getMovieDetails = useCallback(async () => {
    dispatch(setSpinnerValue(true));
    await dispatch(getMovieExtraData(id) as any);
    dispatch(setSpinnerValue(false));
  }, [dispatch, id]);

  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);

  return (
    <div className="movieDetail_container">
      {spinnerState.showSpinner ? (
        <div className="movieDetail_spinner-container">
          <Spinner />
        </div>
      ) : (
        <>
          <Banner
            bannerImages={moviesState?.movieEmbeddedData?.images.filter(
              (image: any) => image.type == "background"
            )}
          />
          {moviesState.movieExtraData && (
            <section className="movieDetail_info-container">
              <div className="movieDetail_generalInfo-container">
                <div className="movieDetail_generalInfo-schedule">
                  <img
                    className="movieDetail_generalInfo-calendarIcon"
                    src={calendarIcon}
                    alt="calendar icon"
                  />
                  {moviesState?.movieExtraData?.schedule?.days[0] &&
                  moviesState?.movieExtraData?.schedule?.time
                    ? `${moviesState?.movieExtraData?.schedule?.days[0]}
                      ${moviesState?.movieExtraData?.schedule?.time}`
                    : "No available data"}
                </div>
                <div className="movieDetail_generalInfo-rating">
                  <img
                    className="movieDetail_generalInfo-ratingIcon"
                    src={imdbIcon}
                    alt="rating icon"
                  />
                  <p>
                    {moviesState?.movieExtraData?.rating?.average ||
                      "no available data"}
                  </p>
                </div>
              </div>

              <div className="movieDetail_summary-container">
                <div className="movieDetail_summary-header">
                  <h2 className="movieDetail_summary-title">
                    {moviesState?.movieExtraData?.name}
                  </h2>
                  <p className="movieDetail_summary-extraInfo">
                    {moviesState?.movieExtraData?.genres &&
                      moviesState.movieExtraData?.genres?.length > 0 && (
                        <>
                          <div className="movieDetail_genre-row">
                            <span className="movieDetail_genre"><strong>Genres:</strong></span>
                            <p className="movieDetail_genre">
                            {moviesState?.movieExtraData?.genres.map(
                              (genre: any) => (` ${genre}`)
                            ).join(", ")}</p>{" "}
                          </div>
                          <div className="movieDetail_country-row">
                            <span className="movieDetail_country"><strong>Country:</strong></span>
                            <p className="movieDetail_country">
                              {moviesState?.movieExtraData?.network?.country?.name?.length > 0 ?
                                moviesState?.movieExtraData?.network?.country?.name : " - "}
                              </p>
                          </div>
                        </>
                      )}
                  </p>
                </div>
                <div className="movieDetail_summary-textContainer">
                  <p className="movieDetail_summary-text">
                    {moviesState?.movieExtraData?.summary?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </p>
                </div>
              </div>
            </section>
          )}
          <section className="movieDetail_cast-container">
            <CastTable castInfo={moviesState?.movieEmbeddedData?.cast} />
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
