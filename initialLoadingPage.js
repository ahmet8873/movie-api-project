import { apikey } from "./constant.js";
const mainWrapper = document.querySelector(".wrapper");
const loadingContainer = document.querySelector(".loading-container");
import { displayMovieDetails } from "./displayMovieDetails.js";
import { movieNames } from "./randomMovieName.js";
// initial loading of the application

export function initialLoading() {
  window.addEventListener("load", async () => {
    mainWrapper.style.display = "none";
    loadingContainer.style.display = "flex";

    // Randomly select a movie name from the array
    const randomIndex = Math.floor(Math.random() * movieNames.length);
    const randomMovieName = movieNames[randomIndex];

    const response = await fetch(
      `https://www.omdbapi.com/?s=${randomMovieName}&page=1&apikey=${apikey}`
    );
    const data = await response.json();
    let imdbId = data.Search[0].imdbID;

    const res = await fetch(
      `https://www.omdbapi.com/?i=${imdbId}&page=1&apikey=cf79b36e`
    );
    const movieDetail = await res.json();

    mainWrapper.style.display = "block";
    loadingContainer.style.display = "none";
    displayMovieDetails(movieDetail);
  });

  // hide searchlist when click out of searchlist
  document.addEventListener("click", function (event) {
    const searchList = document.getElementById("search-list");
    const targetElement = event.target;

    // Check if the clicked element is outside the search list
    // parentElement.contains(childElement);
    if (!searchList.contains(targetElement)) {
      searchList.classList.add("hide-search-list");
    }
  });
}
