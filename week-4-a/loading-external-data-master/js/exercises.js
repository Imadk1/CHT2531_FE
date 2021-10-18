function loadData(url,callback) {
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
}

const showAllFilms = function(films){
	films.forEach(film => {
		console.log(film.title)
	});
}

const showGodFather = function(films){
	console.log(`------------------------------------------------------------------
	Film: ${films[4].title}, Year of release: ${films[4].year}, Duration: ${films[4].duration}
------------------------------------------------------------------`)
}

const showGodFatherAll = function(filmsObject){
	console.log(`---------------------------------------------------------------------------------------
	Film: ${filmsObject.results[4].title}, Year of release: ${filmsObject.results[4].year}, Genre: ${filmsObject.results[4].genres}, Duration: ${filmsObject.results[4].duration}
---------------------------------------------------------------------------------------`)
}

const getAllSpecies = function(species) {
	species.results.forEach(species => {
		console.log(species.name)
	});
}

const getWookie = function(species) {
	console.log(species.results[2].name)

}

const getWookieInfo = function(species) {
	console.log(species.result.properties.classification)
	console.log(species.result.properties.designation)
}


loadData("https://www.swapi.tech/api/species",getAllSpecies);
loadData("./data/films-object.json",showGodFatherAll);




/*fetch("./data/films-object.json").then(function(response) {
	return response.json();
}).then(function(json) {
	showData(json)
});


const showData = function(filmsObject){
	filmsObject.results.forEach(films => {
		console.log(films.title)
	});

	console.log(`---------------------------------------------------------------------------------------
	Film: ${filmsObject.results[1].title}, Year of release: ${filmsObject.results[1].year}, Genre: ${filmsObject.results[1].genres}, Duration: ${filmsObject.results[1].duration}
---------------------------------------------------------------------------------------`)
	console.log(`---------------------------------------------------------------------------------------
	Film: ${filmsObject.results[4].title}, Year of release: ${filmsObject.results[4].year}, Genre: ${filmsObject.results[4].genres}, Duration: ${filmsObject.results[4].duration}
---------------------------------------------------------------------------------------`)

} 

fetch("https://www.swapi.tech/api/species").then(function(response) {
	return response.json();
}).then(function(json) {
	getSpecies(json)
});


const getSpecies = function(species) {
	console.log(`---------------------------`)
	species.results.forEach(speciesInfo => {
		console.log(speciesInfo.name)
	});

	console.log(`----------------------
	Species: ${species.results[2].name}
----------------------`)

	fetch("https://www.swapi.tech/api/species/2").then(function(response) {
		return response.json();
	}).then(function(json) {
		getWookie(json)
	});

	const getWookie = function(species) {
	console.log(species.result.properties.classification)
	console.log(species.result.properties.designation)
	}
	
}*/



// Q1) Open index.html in a browser. Open the console, note how the films data has been loaded from a JSON file.
// a) Modify the code so that it outputs the title of each film.
// b) Modify the code so that the full details of the second film (Winter's Bone) are displayed in the console.
// c) Open films.json. Have a good look at the structure of the file. Add the details for another film. Modify the code so that the new film's details are displayed in the console.

// Q2) In a text-editor open films-object.json. This contains similar data but structured in a slightly different way.
// a) Modify the fetch code so that it loads the data in films-object.json instead. Modify the code in the displayData() to output the list of film titles to the console.
// b) Modify the code so that the genres of Winter's Bone are displayed in the console.
// c) Have a good look at the structure of films-object.json. Add the details for another film. Modify the code so that the new film's details are displayed in the console.

// Q3) Next we'll use an API instead of hard coded data
// a) Open a new tab in a web browser enter https://www.swapi.tech/api/species. See the response you get from the SWAPI site.
// b) Modify your code from the previous question so that you load data from the Star Wars API using this URL. To start with use a simple console.log to print the entire response. Then think about about how you can list just the species names.
// c) Have a look at https://www.swapi.tech/docs and modify your code to make a request for a single species. Display some of the species details

// Q4) Now think about how you can make the code more re-usable.
//a) Create a new function, call it loadData(). Put the fetch() code in this function. The loadData() function should accept two arguments, a URL to request data from and a callback that will be executed when the data is returned. Have a look on the notes (in this repository) for an example.
//b) Make multiple calls to your loadData() function for the different examples we have looked at today e.g.

// Q5) In completing the above exercises we have skipped over explaining the fetch() API and promises in any detail. If you are thinking of doing more JavaScript in the future you should be familiar with asynchronous programming, callbacks, promises and how these ideas are used in the fetch() API works. Do some research into these topics so that you are familiar with these JavaScript concepts. The notes and the lecture slides from this week have some links to get you started. 
