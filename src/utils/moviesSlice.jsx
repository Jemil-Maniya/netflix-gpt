import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      //   console.log("reducer payload", action.type);
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      //   console.log("reducer payload", action.type);
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      //   console.log("reducer payload", action.type);
      state.topRatedMovies = action.payload;
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideo = action.payload;
      // console.log("reducer payload", action.type)
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideos,
  addPopularMovies,
  addTopRatedMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
