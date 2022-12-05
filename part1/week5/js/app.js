// global Variables
let masterMovieObject;
let movieArray = [];
let randNum;
let randPageNumber = Math.floor(Math.random() * 300) + 1;
const apiKey = 'ee2e00cb4eb46b7262f08bc8d337cc19';
let apiUrl =  `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${randPageNumber}`
let questionCounter = 0;
let score = 0;
// lowestScore
// userInitials
let progBar = 10;
let inverseScore;
let input = 0;

// generate a random number for our movie Array
let genRandNum = function(){
	randNum = Math.floor(Math.random() * movieArray.length)
	return randNum;
}

// determine the accuracy of the users guess based on the actual movie score
function findAccuracy(guess, real) {
	// declare a variable that is equal to the real rating
	var movieRating = real;
	// conditional that will switch the value to the rating of the users guess
	if(real < guess) {
		movieRating = guess
	}
	let delta = Math.abs(real-guess)
	return Math.abs(Math.ceil((100-(((delta) / movieRating) * 100))));
}

// let pullMovieRatings = function() {

// 	$.ajax({
// 		url:  'www.omdbapi.com/?apikey='
// 	})
// }


let playGame = function() {
	questionCounter = 0;
	score = 0;
	movieArray = []
	randPageNumber = Math.floor(Math.random() * 300) + 1;
	progBar = 0
	// progressBar function will live here
	progressBar()
	$('#rateYo').rateYo('option', 'rating', 0);
	$('#rateYoRating').text('0')
	$('.main').removeClass('hidden')
	$('.input-screen').removeClass('hidden')
	$('.results-screen').addClass('hidden')
	$('.instructions').addClass('hidden')
	$('.end-screen').addClass('hidden')
	$('.end').addClass('hidden')
	// display progress
	$('.progress').removeClass('hidden')
	$.ajax({
		url: apiUrl,
		method: 'GET',
	}).done(function(response) {
		for(i = 0; i < response.results.length; i++) {
			if(response.results[i].vote_average != 0 && response.results[i].adult === false) {
				console.log(response.results[i].title)
				movie = {
					title: response.results[i].title,
					poster: response.results[i].poster_path,
					rating: (Math.round(((response.results[i].vote_average) / 2) * 10) / 10),
					genre: response.results[i].genre_ids[i],
					overview: response.results[i].overview
				}
				movieArray.push(movie)
			}
		}
	})
}

let submitInput = function() {
	console.log(movieArray)
	// $('.panel-heading').text(movieArray[randNum].title)
	$('.next').removeClass('hidden');
	if(questionCounter === 9) {
		$('.next').addClass('hidden')
		$('.end').removeClass('hidden')
	}
	$('.input-screen').addClass('hidden');
	$('#scoreStatus').removeClass('hidden');

	
	// let rating = movieArray[randNum].rating

	$('#rateYo2').rateYo('option', 'rating', rating)
	$('#rateYo2Rating').text(`Actual Rating: ${rating}`)

	let diff = findAccuracy(input, rating);
	$('#scoreStatus').html(`+ ${diff} points`)
	score = score + diff
}

let nextQuestion = function() {
	// reset the ratingbar and display
	$('#rateYo').rateYo('option', 'rating', 0)
	$('#rateYoRating').text('0')
	input = 0;
	questionCounter++
	movieArray.splice(randNum, 1)
	$('.image').html(`<img src='https://image.tmdb.org/t/w342${movieArray[genRandNum()].poster}/>}`)
	$('.results-screen').addClass('hidden')
	$('.input-screen').removeClass('hidden')
	progressBar
}


let progressBar = function() {
	progBar = progBar + 10;
	progDisp = questionCounter + 1;
	progSettings = 'width: ' + progBar + '%';
	$('.progress-bar').attr('aria-valuenow', progBar)
	$('.progress-bar').attr('style', progSettings)
	$('.progress-bar').html(`Question ${progDisp} out of 10`)
}

$('#rateYo').rateYo(
	{ratedFill: '#E74C3C', starWidth: '100px'}
).on('rateyo.change', function(e, data) {
	let rating = data.rating;
	input = rating;
	$(this).next().text(rating);	
})