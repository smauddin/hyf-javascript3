
function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request
    request.send();
}

// creating tag function

function addTagByRating(movie) {
    this.ratingValue = movie.rating;
    if (ratingValue >= 8.5) {
        return "Excellent";
    } else if (ratingValue >= 8) {
        return "Very Good";
    } else if (ratingValue < 8 && ratingValue > 7) {
        return "Good";
    } else {
        return "Average";
    }
}

//Ajax call to fetch data
getAjaxData('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json', function (movies) {

    // Movies with New Tag
    movies.map(movie => (movie.tag = addTagByRating(movie)));
    console.log("Movies With Tags: ", movies);

    //Show all movies in the list with creating "li" eliment
    let allButton = document.querySelector('#all');

    allButton.addEventListener('click', function () {
        $('#excellent-movies').hide();
        $('#good-movies').hide();
        $('#veryGood-movies').hide();
        $('#all-movies').show();
        let moviesList = '';
        let ul = document.querySelector('#all-movies');
        ul.innerHTML = '';

        for (let i = 0; i < movies.length; i++) {
            
            let newLi = document.createElement('li');
            let newList = ul.appendChild(newLi);
            moviesList += newList.innerHTML = movies[i].title;
        }
        return moviesList;
        ul.innerHTML = '';
    })

    // Show only Excellent Movies 
    let excellentBtn = document.querySelector('#excellent');
    excellentBtn.addEventListener('click', function () {
        $('#all-movies').hide();
        $('#good-movies').hide();
        $('#veryGood-movies').hide();
        $('#excellent-movies').show();

        let moviesList = "";
        let excellentUl = document.querySelector('#excellent-movies');
        excellentUl.innerHTML = '';

        for (let movie of movies) {
            if (movie.tag === 'Excellent') {
                let newExcellentLi = document.createElement('li');
                let newExcellentList = excellentUl.appendChild(newExcellentLi);
                moviesList += newExcellentList.innerHTML = movie.title;
            }            
        }
        return moviesList
        excellentUl.innerHTML = moviesList;
      
    });

    // Show only very good movies 

    let veryGoodBtn = document.querySelector('#very-good');
    veryGoodBtn.addEventListener('click', function () {
        $('#all-movies').hide();
        $('#excellent-movies').hide();
        $('#good-movies').hide();
        $('#veryGood-movies').show();

        let moviesList = "";
        let veryGoodUl = document.querySelector('#veryGood-movies');
        veryGoodUl.innerHTML = '';

        for (let movie of movies) {
            if (movie.tag === 'Very Good') {
                let newVeryGoodLi = document.createElement('li');
                let newVeryGoodList = veryGoodUl.appendChild(newVeryGoodLi);
                moviesList += newVeryGoodList.innerHTML = movie.title;
            }
        }
        return moviesList;
        veryGoodUl.innerHTML = moviesList;
    })

    //Show only Good Movies 

    let goodMovieBtn = document.querySelector('#good');
    goodMovieBtn.addEventListener('click', function () {
        $('#all-movies').hide();
        $('#excellent-movies').hide();
        $('#veryGood-movies').hide();
        $('#good-movies').show();
        let moviesList = '';
        let goodUl = document.querySelector('#good-movies');
        goodUl.innerHTML = '';

        for (let movie of movies) {
            if (movie.tag === 'Good') {
                let newGoodLi = document.createElement('li');
                let newGoodList = goodUl.appendChild(newGoodLi);
                moviesList += newGoodList.innerHTML = movie.title;
            }
        }
        return moviesList;
        goodUl.innerHTML = moviesList;
    })

});





