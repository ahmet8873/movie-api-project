const searchList = document.getElementById("search-list");
const searchInput = document.getElementById("movie-search-box");
const mainWrapper = document.querySelector(".wrapper");
const loadingContainer = document.querySelector(".loading-container");
const errorPage = document.querySelector(".error-page");
const restartBtn = document.querySelector(".restart-button");
import { displayMovieDetails } from "./displayMovieDetails.js";
export const loadMovieDetails = () => {
  const searchListArray = searchList.querySelectorAll(".search-list-item");
  searchListArray.forEach((movie) => {
    movie.addEventListener("click", async () => {
      try {
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

        console.log("movieDetailData: ", movieDetailData);
        displayMovieDetails(movieDetailData);
      } catch (error) {
        mainWrapper.style.display = "none";
        loadingContainer.style.display = "none";
        errorPage.style.display = "block";
      }
    });
  });

  // Handle restart button click event
  restartBtn.addEventListener("click", () => {
    mainWrapper.style.display = "block";
    errorPage.style.display = "none";
  });
};
