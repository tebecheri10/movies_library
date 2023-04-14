import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieExtraData } from '../features/movies/moviesSlice';
import { useParams } from 'react-router-dom';
import type { RootState } from '../app/store'

const MovieDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch()
  const moviesState = useSelector((state: RootState) => state.movies)

  const getMovieDetails = useCallback(() => {
    dispatch(getMovieExtraData(id) as any)
  }, [dispatch,id])

  useEffect(() => {
    getMovieDetails()
  }, [getMovieDetails])

  return (
    <div  className="movieDetail_container">
      {moviesState.movieExtraData &&
        (
          <div>
            <p>{moviesState.movieExtraData.name}</p>
            <img src={moviesState?.movieExtraData?.image?.medium} alt="" />
          </div>
        )
      }
    </div>
  )
}

export default MovieDetail
