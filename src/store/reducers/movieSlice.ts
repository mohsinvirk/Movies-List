import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { MovieType } from "../../types"

import { searchMovies } from "../../utils/movies"

import data from "../../data/index.json"

interface MoviesState {
  movies: MovieType[]
  filteredMovies: MovieType[]
}

const initialState: MoviesState = {
  movies: data.movies,
  filteredMovies: [],
}

const addMovies = (state: MoviesState, action: PayloadAction<MovieType[]>) => {
  return {
    ...state,
    movies: [...state.movies, ...action.payload],
  }
}

const filterMoviesBySearch = (state: MoviesState, action: PayloadAction<string>) => {
  const filteredMovies = searchMovies(state.movies, action.payload)

  return {
    movies: state.movies,
    filteredMovies,
  }
}

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies,
    filterMoviesBySearch,
  },
})

export const { addMovies: addNewMovies, filterMoviesBySearch: requestSearch } = moviesSlice.actions

export default moviesSlice.reducer
