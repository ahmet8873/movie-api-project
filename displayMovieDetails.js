const resultGrid = document.getElementById("result-grid");
export const displayMovieDetails = (details) => {
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
