import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies:null,
    topRatedMovies:null,
    upcomingMovies:null,
    trailerMovies:null,
    genreMovies:null,
    myListMovies:new Set([])
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.popularMovies=action.payload;
    },
    addTopRatedMovies:(state,action)=>{
      state.topRatedMovies=action.payload;
    },
    addUpcomingMovies:(state,action)=>{
      state.upcomingMovies=action.payload;
    },
    addTrailerMovies: (state,action)=>{
        state.trailerMovies=action.payload;
    },
    addMovieGenre: (state,action)=>{
      state.genreMovies=action.payload;
    },
    addToMyList: (state,action)=>{
      state.myListMovies.add(action.payload);
    },
    removeFromMyList: (state,action)=>{
      state.myListMovies.delete(action.payload);
    }
  },
});

export const { addNowPlayingMovies,addTrailerMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addMovieGenre,addToMyList,removeFromMyList } = movieSlice.actions;

export default movieSlice.reducer;
