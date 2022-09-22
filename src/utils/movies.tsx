import { MovieType } from "../types"

export const searchMovies = (movies: MovieType[], search: string) => {
  return movies.filter(({ title }) => title.toLowerCase().includes(search))
}
