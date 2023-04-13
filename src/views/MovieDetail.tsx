import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSingleMovie } from '../features/movies/moviesSlice';
import { useParams } from 'react-router-dom';
import type { RootState } from '../app/store'

const MovieDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch()
  const moviesState = useSelector((state: RootState)=> state.movies)

  const filterSelectedMovie = ()=>{
    const selectedMovie = moviesState?.completeList?.filter((movie: any) => movie.show.id == id)
    dispatch(setSingleMovie({selectedMovie}))
  }

  useEffect(()=>{
    filterSelectedMovie()
  }, [])

  return (
    <div>
       {moviesState.singleMovie &&
        (
          <div>
            <p>{moviesState.singleMovie[0]?.show.name}</p>
            <img src={moviesState.singleMovie[0]?.show.image.medium} alt="" />
          </div>
       )
       }
    </div>
  )
}

export default MovieDetail