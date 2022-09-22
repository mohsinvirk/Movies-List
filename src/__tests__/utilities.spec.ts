import { describe, expect, test } from "@jest/globals"
import { searchMovies } from "../utils/movies"

import data from "../data/index.json"

describe("Search thorugh movies", () => {
  test("Searching with empty search should return all movies", () => {
    const searchResult = searchMovies(data.movies, "")

    expect(searchResult.length).toBe(21)
  })

  test("Searching with man should return 1 movie", () => {
    const searchResult = searchMovies(data.movies, "man")

    expect(searchResult.length).toBe(1)
  })
})
