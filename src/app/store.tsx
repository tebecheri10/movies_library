import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from '../features/movies/moviesSlice'
import spinnerReducer from '../features/spinner/spinnerSlice'

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    spinner: spinnerReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch