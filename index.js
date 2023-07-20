import { loadMovies } from "./loadMovies.js";

import { initialLoading } from "./initialLoadingPage.js";

const searchInput = document.getElementById("movie-search-box");
const searchList = document.getElementById("search-list");

const searchMovieTitle = () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm.length > 0) {
    searchList.classList.remove("hide-search-list");
    loadMovies(searchTerm);
  } else {
    searchList.classList.add("hide-search-list");
  }
};

const debounce = (fn, delay) => {
  let id;
  return () => {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      fn();
    }, delay);
  };
};
searchInput.addEventListener("keyup", debounce(searchMovieTitle, 500));

initialLoading();
