import { loadMovies } from "./loadMovies.js";

import { initialLoading } from "./initialLoadingPage.js";

const searchInput = document.getElementById("movie-search-box");
const searchList = document.getElementById("search-list");

const searchMovieTitle = () => {
  let searchTerm = searchInput.value.trim();
  if (searchTerm.length > 0) {
    searchList.classList.remove("hide-search-list");
    loadMovies(searchTerm);
  } else {
    searchList.classList.add("hide-search-list");
  }
};

searchInput.addEventListener("keyup", searchMovieTitle);
initialLoading();
