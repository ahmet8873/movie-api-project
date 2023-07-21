# Movie-API Project
![project image](https://i.ibb.co/RQRJrTS/Screenshot-2023-07-21-at-15-02-38.png)


## live 
 https://ahmet8873.github.io/movie-api-project/
## Technologies Used
 <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>  <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
 # Project Description
This project is a web application that utilizes the OMDB-API to allow users to search for movies and retrieve information about them.
The HTML code represents the structure of the web page, including various containers for displaying search results and movie details. The CSS file (style.css) is used to define the visual styles of the elements on the page. The JavaScript code (index.js, loadMovies.js, initialLoadingPage.js, displayMovieDetails.js, loadMovieDetails.js, and displayMovieList.js) provides the functionality for fetching movie data from the OMDB-API, displaying search results, loading movie details, and handling user interactions. The project  focused on retrieving movie information based on user search queries and presenting it in a user-friendly manner.
HTML Structure:

The HTML file contains the basic structure of the web page with header, body, and various div containers for different sections.
CSS Styling:

The CSS code provides styling and layout for the web page, including the logo, search container, movie result container, loading page, and error page. It also imports custom fonts and defines color variables.
JavaScript Functionality:

The JavaScript code is divided into several modules that handle different functionalities of the application.
Search Functionality:

The user can enter a movie title in the search input field, and as they type, the application performs a search using the IMDb API and displays a list of movie titles that match the search query in a dropdown below the search input (dynamically populating the content).
Displaying Movie Details:

When the user selects a movie from the search list, the application fetches detailed information about the selected movie from the IMDb API and displays it in a result container.
Loading Page:

While fetching movie details from the API, a loading page with a spinning animation is shown to indicate that the data is being fetched.
Error Page:

If there is an error while fetching movie details, an error page is displayed, showing an error image and a "Search Again" button. Clicking the button reloads the main wrapper and restarts the application.
Random Initial Movie Display:

On the initial page load, the application randomly selects a movie name from the predefined array (movieNames) and fetches details for that movie to display on the main wrapper.

