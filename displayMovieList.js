const searchList = document.getElementById("search-list");
import { loadMovieDetails } from "./loadMovieDetails.js";
export const displayMovieList = (movies) => {
  searchList.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    let movieListItem = document.createElement("div");
    movieListItem.id = movies[i].imdbID;
    movieListItem.classList.add("search-list-item");
    // check if poster is applicable
    let moviePoster;
    if (movies[i].Poster !== "N/A") {
      moviePoster = movies[i].Poster;
    } else {
      moviePoster =
        "https://cdn.vectorstock.com/i/1000x1000/53/27/404-page-not-found-error-access-failure-vector-46535327.webp";
    }

    movieListItem.innerHTML = `
             <div class="search-item-tumbnail">
                <img
                  src=${moviePoster}
                  alt="movie poster"
                />
              </div>
              <div class="search-item-info">
                <h3>${movies[i].Title}</h3>
                <p>${movies[i].Year}</p>
              </div>
    `;

    searchList.appendChild(movieListItem);
  }

  loadMovieDetails();
};
