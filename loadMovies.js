import { apikey } from "./constant.js";
import { displayMovieList } from "./displayMovieList.js";
// load movies from api
export const loadMovies = async (searchTerm) => {
  const url = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=${apikey}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(`data: `, data);
  if (data.Response === "True") {
    displayMovieList(data.Search);
  }
};
