import { apikey } from "./constant.js";

const searchInput = document.getElementById("movie-search-box");
const searchList = document.getElementById("search-list");
const resultGrid = document.getElementById("result-grid");
const loadingContainer = document.querySelector(".loading-container");
const mainWrapper = document.querySelector(".wrapper");
const notFoundPage = document.querySelector(".not-found-page");

const findMovies = () => {
  let searchTerm = searchInput.value.trim();
  if (searchTerm.length > 0) {
    searchList.classList.remove("hide-search-list");
    loadMovies(searchTerm);
  } else {
    searchList.classList.add("hide-search-list");
  }
};

searchInput.addEventListener("keyup", findMovies);

// load movies from api
const loadMovies = async (searchTerm) => {
  const url = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=${apikey}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
  if (data.Response === "True") {
    displayMovieList(data.Search);
  }
};

const displayMovieList = (movies) => {
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

const loadMovieDetails = () => {
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

const displayMovieDetails = (details) => {
  resultGrid.innerHTML = `
            <div class="movie-poster">
           
              <img
                src=${
                  details.Poster !== "N/A"
                    ? details.Poster
                    : "https://cdn.vectorstock.com/i/1000x1000/53/27/404-page-not-found-error-access-failure-vector-46535327.webp"
                }
                alt="movie poster"
              />
               <p class='imdb-rate' ><b>Imdb:</b> ${
                 details.Ratings[0].Value
               }</p>
            </div>
            <div class="movie-info">
              <h3 class="movie-title">${details.Title}</h3>
              <ul class="movie-misc-info">
                <li class="year">Year: ${details.Year}</li>
                <li class="rated">Ratings: ${details.Rated}</li>
                <li class="released">Released: ${details.Released}</li>
              </ul>
              <p class="genre"><b>Genre:</b> ${details.Genre}</p>
              <p class="writer"><b>Writer:</b> ${details.Writer}</p>
              <p class="actors"><b>Actors:</b> ${details.Actors}</p>
              <p class="plot">
                <b>Plot:</b> ${details.Plot}
              </p>
              <p class="language"><b>Language:</b> ${details.Language}</p>
              <p class="awards">
                <b><i class="fas fa-award"> </i></b> ${details.Awards}
              </p>
            </div>
    `;
};

// initial loading of the application
window.addEventListener("load", async () => {
  mainWrapper.style.display = "none";
  loadingContainer.style.display = "flex";
  const response = await fetch(
    `https://www.omdbapi.com/?s=Memento&page=1&apikey=${apikey}`
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
