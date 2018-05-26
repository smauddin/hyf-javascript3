
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
        for (let i = 0; i < movies.length; i++) {
            let ul = document.querySelector('#all-movies');
            let newLi = document.createElement('li');
            let newList = ul.appendChild(newLi);
            newList.innerHTML = movies[i].title;
        }
    })

    // Show only Excellent Movies 
    let excellentBtn = document.querySelector('#excellent');
    excellentBtn.addEventListener('click', function () {
        $('#all-movies').hide();
        $('#good-movies').hide();
        $('#veryGood-movies').hide();
        $('#excellent-movies').show();
       
        for (let movie of movies) {
            if (movie.tag === 'Excellent') {
                let excellentUl = document.querySelector('#excellent-movies');
                let newExcellentLi = document.createElement('li');
                let newExcellentList = excellentUl.appendChild(newExcellentLi);
                newExcellentList.innerHTML = movie.title;
            }
        }
    });

    // Show only very good movies 

    let veryGoodBtn = document.querySelector('#very-good');
    veryGoodBtn.addEventListener('click', function () {
        $('#all-movies').hide();
        $('#excellent-movies').hide();
        $('#good-movies').hide();
        $('#veryGood-movies').show();
        for (let movie of movies) {
            if (movie.tag === 'Very Good') {
                let veryGoodUl = document.querySelector('#veryGood-movies');
                let newVeryGoodLi = document.createElement('li');
                let newVeryGoodList = veryGoodUl.appendChild(newVeryGoodLi);
                newVeryGoodList.innerHTML = movie.title;
            }
        }
    })

    //Show only Good Movies 

    let goodMovieBtn = document.querySelector('#good');
    goodMovieBtn.addEventListener('click', function () {
        $('#all-movies').hide();
        $('#excellent-movies').hide();
        $('#veryGood-movies').hide();
        $('#good-movies').show();
        for (let movie of movies) {
            if (movie.tag === 'Good') {
                let goodUl = document.querySelector('#good-movies');
                let newGoodLi = document.createElement('li');
                let newGoodList = goodUl.appendChild(newGoodLi);
                newGoodList.innerHTML = movie.title;
            }
        }
    })

});




