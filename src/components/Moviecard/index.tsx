import React from "react"
import { Link } from "react-router-dom"

import { MovieType } from "../../types"

import { Badge } from "../Badge"

/**
 * * This is an exampe of class Component as it doesn't have state
 * *so we're extending it with pure component
 * @params MovieType
 */

class MovieCard extends React.PureComponent<Partial<MovieType>> {
  /**
   * *We can use state method for managing reactive state
   * *Also can use this.setState to set the state of component
   */

  // state = {};

  /**
   * *componentDidMount or other liescycle methods  can be used to update component
   */

  // componentDidMount(): void {
  //   this.setState({})
  // }

  render(): React.ReactNode {
    const { id, posterUrl, title, genres } = this.props

    return (
      <Link to={`/movie/${id}`}>
        <div key={id} className='w-[300px] bg-white shadow-lg border-gray-100	border'>
          <img className='h-[445px] w-full bg-gray-400' src={posterUrl} alt={title} />
          <div className='p-4'>
            <p className='block mb-4 text-xl font-semibold text-blue-900 hover:underline cursor-pointer truncate'>
              {title}
            </p>

            <div className='flex gap-x-2'>
              {genres?.map((g) => (
                <Badge key={g} badge={g.toLowerCase()} />
              ))}
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default MovieCard
