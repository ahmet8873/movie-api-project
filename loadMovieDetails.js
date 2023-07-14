const searchList = document.getElementById("search-list");
const searchInput = document.getElementById("movie-search-box");
const mainWrapper = document.querySelector(".wrapper");
const loadingContainer = document.querySelector(".loading-container");
import { displayMovieDetails } from "./displayMovieDetails.js";
export const loadMovieDetails = () => {
  const searchListArray = searchList.querySelectorAll(".search-list-item");
  searchListArray.forEach((movie) => {
    movie.addEventListener("click", async () => {
      searchList.classList.add("hide-search-list");
      searchInput.value = "";
      // hide main wrapper and display loading page
      mainWrapper.style.display = "none";
      loadingContainer.style.display = "flex";

      const response = await fetch(
        `https://www.omdbapi.com/?i=${movie.id}&page=1&apikey=cf79b36e`
      );
      const movieDetailData = await response.json();
      // display main wrapper and hide loading page after fetching
      mainWrapper.style.display = "block";
      loadingContainer.style.display = "none";
      // console.log(movieDetailData);
      displayMovieDetails(movieDetailData);
    });
  });
};
