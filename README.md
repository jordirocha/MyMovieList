<p align="center">
  <a href="https://mymovielistapp-nodejs.herokuapp.com/">
    <img src="https://github.com/jordirocha/MyMovieList/blob/main/src/public/img/logo.png" alt="Logo" width="140" height="140">
  </a>

  <h3 align="center">MyMovieList</h3>

  <p align="center">
    Web on you will be able to add all your watched movies in a list.
    <br />
    <br />
    <a href="https://mymovielistapp-nodejs.herokuapp.com/" target="_blank">View Demo</a>
  </p>
</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [About the Project](#about-the-project)
  * [Built With](#built-with)
  * [Project Directories](#project-directories)
* [Getting Started](#getting-started)
  * [Dependencies from Project](#dependencies-from-project)
  * [Run app](#run-app)
* [Contact](#contact)

### About the Project
<p align="center">
<img src="https://github.com/jordirocha/MyMovieList/blob/main/src/public/img/demo.gif" width="650" />
</p>
Application on you'll be able to add your watched movies in a list.</br>
Live demo <a href="https://mymovielistapp-nodejs.herokuapp.com/" target="_blank"><strong>here</strong></a>.

### Features
- listing movies from movie api
- searching movies by title
- on searching movies will be displayed
- add movies to your favorite list
- delete movies from your list
- counter total movies

### Project Directories
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── src
        ├── index.js
        ├── public
        │   ├── css
        │   │   └── main.css
        │   ├── img
        │   │   ├── demo.gif
        │   │   ├── icon.png
        │   │   └── logo.png
        │   └── js
        │       ├── home.js
        │       └── watched.js
        ├── routes
        │   └── index.js
        └── views
            ├── index.html
            ├── partials
            │   ├── footer.html
            │   ├── head.html
            │   └── navigation.html
            └── watched.html


## Getting Started
Must install Node.js in your sistem:</br>

### Requisites
On Windows, <a href="https://nodejs.org/es/download/">here</a></br></br>
On macOS, with `brew`</br>
    
    brew install node
    
On Linux, installing by package
    
    $ apt install npm

### Run App
    git clone https://github.com/jordirocha/MyMovieList.git
    cd MyMovieList/
    npm i express ejs
    npm start
After compiling open your web browser and paste: `http://localhost:3000`.
