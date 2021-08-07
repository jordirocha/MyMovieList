// Parameters from API
const IMG_URL = "https://image.tmdb.org/t/p/w500";

// Title
const title = document.getElementById("title");

// Generate cards
const main = document.getElementById("main");

// Will be shown if we don't' have movies
if (localStorage.length == 0) {
    main.innerHTML = `<h3 class="text-center text-white">Don't have movies!</h3>`;
}

// Call total
getTotalWatched();

// For each item in our localStorage create a card
Object.keys(localStorage).forEach(function (key) {
    let film = JSON.parse(localStorage.getItem(key));
    const movieElement = document.createElement("div");
    movieElement.classList.add("col-auto");
    movieElement.innerHTML = `
                    <div class="card mt-4" style="width: 18rem;">
                    <img src="${film.poster_path
            ? IMG_URL + film.poster_path
            : "https://via.placeholder.com/330x490"
        }" alt="${film.title}" class="img-fluid">
                    <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                    <h5 class="card-title">${film.title}</h5>
                    <h6 class="card-title font-weight-bold ${getColor(film.vote_average)}">${film.vote_average}</h6>
                    </div>
                    <a href="#" id="${film.id}" class="btn btn-outline-danger btn-sm" onclick="deleteWatched(this.id);">REMOVE</a>
                    </div>
                    </div>
                  `;
    main.appendChild(movieElement);
});

// Depending if is in our localstorage
function deleteWatched(id) {
    localStorage.removeItem(id);
    location.reload(true);
}

// Depending the rate change the color
function getColor(note) {
    if (note >= 8) {
        return "text-success";
    } else if (note >= 5) {
        return "text-warning";
    }
    return "text-danger"
}

// Gives total movies in localstorage
function getTotalWatched() {
    document.getElementById("total").innerHTML = localStorage ? localStorage.length : 0;
}