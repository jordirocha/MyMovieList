# MyMovieList
<p align="center">
<img src="https://github.com/jordirocha/MyMovieList/blob/main/src/public/img/demo.gif" width="650" />
</p>
Application on you'll be able to add your watched movies in a list.</br>
Live demo <a href="https://mymovielistapp-nodejs.herokuapp.com/" target="_blank"><strong>here</strong></a>.

## Project Directories
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
## Features
- listing movies from movie api
- searching movies by title
- on searching movies will be displayed
- add movies to your favorite list
- delete movies from your list
- counter total movies

## Before to start
Must install Node.js in your sistem:</br>

On Windows, <a href="https://nodejs.org/es/download/">here</a></br></br>
On macOS, with `brew`</br>
    
    brew install node
    
On Linux, installing by package
    
    $ apt install npm

## To run app
    git clone https://github.com/jordirocha/MyMovieList.git
    cd MyMovieList/
    npm i express ejs
    npm start
After compiling open your web browser and paste: `http://localhost:3000`.
