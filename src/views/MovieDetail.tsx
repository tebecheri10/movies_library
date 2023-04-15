import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieExtraData } from "../features/movies/moviesSlice";
import { useParams } from "react-router-dom";
import type { RootState } from "../app/store";

import Banner from "../components/movieDetail/Banner";

const MovieDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const moviesState = useSelector((state: RootState) => state.movies);

  const getMovieDetails = useCallback(() => {
    dispatch(getMovieExtraData(id) as any);
  }, [dispatch, id]);

  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);

  console.log("moviedata", moviesState?.movieExtraData);

  return (
    <div className="movieDetail_container">
      <Banner
        bannerImages={moviesState?.movieEmbeddedData?.images.filter(
          (image: any) => image.type == "background"
        )}
      />
      {moviesState.movieExtraData && (
        <div className="movieDetail_info-container">
          <section className="movieDetail_generalInfo-container">
            <div className="movieDetail_generalInfo-schedule">
            {moviesState?.movieExtraData?.schedule?.days[0]}-{moviesState?.movieExtraData?.schedule?.time}
            </div>
            <div className="movieDetail_generalInfo-rating">
              <p>{moviesState?.movieExtraData?.rating?.average}</p>
            </div>
          </section>

          <section className="movieDetail_summary-container">
            <div className="movieDetail_summary-header">
              <h2 className="movieDetail_summary-title">
                {moviesState?.movieExtraData?.name}
              </h2>
              <p className="movieDetail_summary-extraInfo">
                {moviesState?.movieExtraData?.genres &&
                  moviesState.movieExtraData.genres.length > 0 && (
                    <>{moviesState.movieExtraData.genres[0]} - {moviesState?.movieExtraData?.network?.country?.name}</>
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
          </section>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
