import React from "react"

import { useAppSelector, useAppDispatch } from "../../hooks/useStore"

import MovieCard from "../Moviecard"
import Search from "../SearchInput"

import { requestSearch } from "../../store/reducers/movieSlice"

const Home = () => {
  const { movies, filteredMovies } = useAppSelector((state) => state.movies)
  const dispatch = useAppDispatch()

  const handleSearch = (search: string) => {
    dispatch(requestSearch(search))
  }

  const moviesToRender = filteredMovies?.length > 0 ? filteredMovies : movies

  return (
    <div className='bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='relative lg:container mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl'>
        <div className='flex justify-between'>
          <div>
            <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
              Popular Movies
            </h2>
            <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
              This is a list of some popular movies of all time.
            </p>
          </div>

          <Search onSearchSubmit={handleSearch} />
        </div>

        <div className='mt-12 flex flex-wrap items-center justify-center gap-16 pt-12 lg:gap-x-5 lg:gap-y-12'>
          {moviesToRender.map(({ id, title, posterUrl, genres }) => (
            <MovieCard key={id} id={id} title={title} posterUrl={posterUrl} genres={genres} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
