
let numbers = [1, 2, 3, 4];
let newNumbers = [];

/* for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
} */

//console.log("The doubled numbers are", newNumbers);

const doubledNumbers = numbers
    .filter(number => number % 2 !== 0)
    .map(number => number * 2)

console.log("The doubled numbers are", doubledNumbers);




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

getAjaxData('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json', function (movies) {
    //console.log(movies[0]);
    const totalvotes = movies.reduce(function (accumulator, movie) {
        return accumulator + movie.votes;
    }, 0);

    //console.log('Total Votes: ', totalvotes);

    const sortedMovies = movies.sort(function (a, b) {
        if (a.votes < b.votes) {
            return -1;
        } else if (a.votes > b.votes) {
            return 1;
        } else {
            return 0;
        }
    });

    //console.log('Sorted Movies: ', sortedMovies);

});

// creating tag function

function addTagByRating(movie) {
    this.ratingValue = movie.rating;
    if (ratingValue >= 7) {
        return "Good";
    } else if (ratingValue >= 4 && ratingValue < 7) {
        return "Average";
    } else {
        return "Bad";
    }
}

//Ajax call to fetch data
getAjaxData('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json', function (movies) {

    // Movies with Tag
    movies.map(movie => (movie.tag = addTagByRating(movie)));
    console.log("Movies With Tags: ", movies);


    // Average Rating of all the Movies with sum of the rating

    const totalRating = movies.reduce((accumulator, movie) => (accumulator + movie.rating), 0);
    console.log('Total Rating for all movies:', totalRating.toFixed(2));
    console.log('The average rating of all the movies: ', (totalRating / movies.length).toFixed(2));


    const goodMovies = movies
        .filter(movie => movie.tag === 'Good');
    // .map(movie => movie.title);
    console.log('Good Movies, Based on New Tag : ', goodMovies.length);

    const averageMovies = movies
        .filter(movie => movie.tag === 'Average')

    console.log('Average Movies, Based on New Tag: ', averageMovies.length);

    const badMovies = movies
        .filter(movie => movie.tag === 'Bad')

    console.log('Bad Movies, Based on New Tag: ', badMovies.length);

    const moviesIn80s = movies
        .filter(movie => movie.year <= 1989 && movie.year >= 1980)

    console.log('Movies between 1980 & 1989: ', moviesIn80s.length);

    // Movie matching by Key words
    const searchMovieKeyWord = movies.filter(movie => movieMatchingByKey(movie));
    console.log("Filtering movies with given key words: ", searchMovieKeyWord)
    console.log("Total movies that matched the key words: ", searchMovieKeyWord.length);

});


// Movie matching function by key words
function movieMatchingByKey(movie) {

    const searchKeyWords = ["The", "dog", "who", "is", "not", "a", "man"];
    const searchKeyWordMap = searchKeyWords.map(string => string.toLowerCase());
    const movieTitleMaping = movie.title.split(" ").map(string => string.toLowerCase());
    const finalValue = movieTitleMaping.some(word => searchKeyWords.includes(word));
    let returnValue = false;

    movieTitleMaping.map(title => {
        searchKeyWordMap.map(searchString => {
            if (title === searchString) {
                returnValue = true;
            };
        });

    });
    return finalValue;
};


