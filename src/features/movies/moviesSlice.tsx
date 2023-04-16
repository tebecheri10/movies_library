import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface MoviesState {
  movieName: string
  completeList: any
  movieExtraData: any
  movieEmbeddedData: any
}

const initialState: MoviesState = {
  movieName: "",
  completeList: [],
  movieExtraData: [],
  movieEmbeddedData: null
};

export const getMovies = createAsyncThunk('movies/getMovies', async (movieName: string | undefined) => {
  try {
    const url = `https://api.tvmaze.com/search/shows?q=${movieName}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log("error: ", error)
  }
});

export const getMovieExtraData = createAsyncThunk('movies/getMovieExtraData', async (movieId: string | undefined) => {
  try {
    const url = `https://api.tvmaze.com/shows/${movieId}?embed[]=episodes&embed[]=cast&embed[]=images`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log("error: ", error)
  }
});

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovieName: (state, action)=>{
        state.movieName = action.payload.value
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.completeList = action.payload;
    });
    builder.addCase(getMovieExtraData.fulfilled, (state, action) => {
      state.movieExtraData = action.payload;
      state.movieEmbeddedData = action.payload._embedded;
    });
  },
});

export const { setMovieName } = moviesSlice.actions
export default moviesSlice.reducer;
