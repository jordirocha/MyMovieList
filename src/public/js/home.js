// Parameters from API
const API_KEY = "api_key=79f5b0ef7d5e7bba82e32481e99df542";
const BASE_URL = "https://api.themoviedb.org/3";
const APT_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY;

// Title
const title = document.getElementById("title");

// Generate cards
const main = document.getElementById("main");

// On search
const form = document.getElementById("form");
const search = document.getElementById("search");

// Controls of pagination
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const current = document.getElementById("current");

// Values of pagination
var currentPage = 1;
var nextPage = 2;
var prevPage = 3;
var lastUrl = "";
var totalPages = 100;

// Call function to get popular movies
getMovies(APT_URL);

document.getElementById("total").innerHTML = localStorage ? localStorage.length : 0;

// Return most popular movies on main
function getMovies(url) {
    lastUrl = url;
    fetch(url).then((res) => res.json()).then((data) => {
        if (data.results.length != 0) {
            showMovies(data.results);
            currentPage = data.page;
            nextPage = currentPage + 1;
            prevPage = currentPage - 1;
            current.innerHTML = currentPage;
            totalPages = data.total_pages;
            if (totalPages == 1 || totalPages == 0) {
                prev.classList.add("disabled");
                next.classList.add("disabled");
            } else if (currentPage == totalPages) {
                next.classList.add("disabled");
                prev.classList.remove("disabled");
            } else if (prevPage == 0) {
                prev.classList.add("disabled");
                next.classList.remove("disabled");
            } else {
                prev.classList.remove("disabled");
                next.classList.remove("disabled");
            }
            // controlsPagination();
        } else {
            main.innerHTML = `<h2 class="text-white text-center">No Results Found<h2>`;
        }
    });
}

// Create cards
function showMovies(data) {
    main.innerHTML = "";
    data.forEach((movie) => {
        console.log(data);
        const { id, title, poster_path, release_date } = movie;
        const movieCard = document.createElement("div");
        movieCard.classList.add("col-auto");
        movieCard.innerHTML = `
        <div class="card mt-4" style="width: 18rem;">
            <img src="${poster_path
                ? IMG_PATH + poster_path
                : "https://via.placeholder.com/330x490"
            }" alt="${title}" class="img-fluid">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-title" >${release_date.substring(0,4)}</h6>
                </div>
                <button id="${id}" type="button" class="btn btn-outline-success btn-sm" onclick="addWatched(this.id);">ADD TO WATCHED</button>
            </div>
        </div>`;
        main.appendChild(movieCard);
        checkIsWatched(id);
    });
}

// On searching movie
search.addEventListener("keyup", (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm) {
        getMovies(SEARCH_URL + "&query=" + searchTerm);
        title.innerHTML = "Results of '" + searchTerm + "'";
    } else {
        getMovies(APT_URL);
        title.innerHTML = "Most Popular";
    }
});

// On click next
next.addEventListener("click", () => {
    if (nextPage <= totalPages) {
        pageCall(nextPage);
    }
});

// On click previous
prev.addEventListener("click", () => {
    if (prevPage >= 1) {
        pageCall(prevPage);
    }
});

// We add the page parameter
function pageCall(page) {
    getMovies(lastUrl + "&page=" + page);
}

// Logic of next and previous
// function controlsPagination() {
//     if (totalPages == 1) {
//         prev.classList.add("disabled");
//         next.classList.add("disabled");
//     } else if (currentPage == totalPages) {
//         next.classList.add("disabled");
//         prev.classList.remove("disabled");
//     } else if (prevPage == 0) {
//         prev.classList.add("disabled");
//         next.classList.remove("disabled");
//     } else {
//         prev.classList.remove("disabled");
//         next.classList.remove("disabled");
//     }
// }

function addWatched(id) {
    fetch(BASE_URL + "/movie/" + id + "?" + API_KEY).then((res) => res.json()).then((movie) => {
        document.getElementById(id).classList.add("disabled");
        document.getElementById(id).innerHTML = "WATCHED";
        getMovie(movie);
    });
}

function getMovie(movie) {
    const {
        id,
        title,
        poster_path,
        release_date,
        overview
    } = movie;
    let info = { id: id, title: title, poster_path: poster_path, release_date: release_date, overview: overview }
    localStorage.setItem(id, JSON.stringify(info));
}

function checkIsWatched(id) {
    if (id in localStorage) {
        document.getElementById(id).classList.add("disabled");
        document.getElementById(id).innerHTML = "WATCHED";
    }
}
