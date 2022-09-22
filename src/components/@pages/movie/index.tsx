import React, { useMemo } from "react"
import { useParams } from "react-router-dom"

import { useAppSelector } from "../../../hooks/useStore"

import { GoBack } from "../../GoBack"
import { Badge } from "../../Badge"

const Movie = () => {
  const { id } = useParams()

  const { movies } = useAppSelector((state) => state.movies)

  const movie = useMemo(() => movies.find((m) => m.id === parseInt(id as string)), [id])

  if (!movie) {
    return <p>No movie found with id:{id}</p>
  }

  const { title, posterUrl, genres, year, runtime, actors, director, plot } = movie

  return (
    <div className=' relative bg-white max-w-5xl mx-auto pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='absolute top-4'>
        <GoBack />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <img
          className='h-96 w-auto flex mx-auto md:ml-auto md:mr-0  object-cover lg:h-full'
          src={posterUrl}
          alt={title}
        />

        <div className='relative pb-16 px-4 mt-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto '>
          <div className='lg:col-start-2 lg:pl-8'>
            <div className='text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0'>
              <h2 className='leading-6 text-indigo-600 font-semibold tracking-wide uppercase'>
                {year} - {director}
              </h2>
              <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                {title}
              </h3>
              <p className='mt-4 text-lg text-gray-500'>{plot}</p>

              <div className='pt-4 md:pt-6'>
                <h3 className='font-bold text-lg lg:2xl pb-1'>Genres</h3>
                <div className='flex gap-x-2'>
                  {genres.map((g) => (
                    <Badge key={g} badge={g.toLowerCase()} />
                  ))}
                </div>
              </div>

              <div className='pt-4 md:pt-6'>
                <h3 className='font-bold text-lg lg:2xl'>Actors</h3>
                <p className='text-base text-gray-500'>{actors}</p>
              </div>

              <div className='pt-4 md:pt-6'>
                <h3 className='font-bold text-lg lg:2xl'>Run Time</h3>
                <p className='text-base text-gray-500'>{runtime} minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
