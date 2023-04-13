import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface MoviesState {
  movieName: string
  completeList: any;
  singleMovie: any
}

const initialState: MoviesState = {
  movieName: "",
  completeList: [],
  singleMovie: []
};

export const getMovies = createAsyncThunk('movies/getMovies', async (movieName: string) => {
  try {
    const url = `https://api.tvmaze.com/search/shows?q=${movieName}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log("error: ", error)
  }
});

//https://api.tvmaze.com/shows/:id?embed=cast

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovieName: (state, action)=>{
        state.movieName = action.payload.value
    },
    setSingleMovie: (state, action)=>{
      state.singleMovie = action.payload.selectedMovie
  }
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.completeList = action.payload;
    });
  },
});

export const { setMovieName, setSingleMovie } = moviesSlice.actions
export default moviesSlice.reducer;
