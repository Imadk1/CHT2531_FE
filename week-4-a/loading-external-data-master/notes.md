# Loading External Data

## A simple ```fetch()``` request

As an example, imagine we have a simple JSON file *countries.json* that contains the following data:

```json
[
    {"name" : "England", "capital" : "London", "continent" : "Europe", "population": 53000000},
    {"name" : "France", "capital" : "Paris", "continent" : "Europe", "population": 67000000},
    {"name" : "USA", "capital" : "Washington", "continent" : "N. America", "population": 325000000}
]
```

Using the ```fetch()``` method we can load the data in this file and use it in our applications. Here's the JavaScript code for a simple  request. There's quite a lot to take in but the code is more or less the same every time we want to make an ```fetch()``` request.

```javascript
fetch("./data/countries.json").then(function(response) { //request the countries.json files
		return response.json(); //convert the json data into JavaScript objects/arrays
}).then(function(json) {
		showInfo(json); //call the showInfo function
});

const showInfo(data){
  const countries = data;
  console.log(countries[1].capital); //outputs Paris
}
```

## Making several requests
Often we want to make lots of ```fetch()``` requests. For example, I might want a list of countries and then later on display details for a specific country. We might end up with code like this:

```javascript
//show all countries
fetch("./data/countries.json").then(function(response) {
		return response.json();
}).then(function(json) {
		showPopulations(json); //call the showPopulations function
});

const showPopulations(data){
  const countries = data;
  countries.forEach(function(country){
			console.log(`${country.name} has a population of ${country.population} `);
	})
}


//show the capital of Paris
fetch("./data/countries.json").then(function(response) {
		return response.json();
}).then(function(json) {
		showCapitalFrance(json); //call the showCapitalFrance function
});

const showCapitalFrance(data){
  const countries = data;
  console.log(countries[1].capital); //outputs Paris
}

```
Clearly this isn't a good idea (remember the DRY principle). We have huge amounts of duplicate code.

### Wrapping the ```fetch()``` code in a function
We can wrap the ```fetch()``` code in a function. We can then pass arguments to the function to specify a URL to load data from and a function to execute once the data has loaded.

```javascript

function loadData(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
} //end of loadData

const showPopulations = function(data){
	const countries = data;
	countries.forEach(function(country){
		console.log(`${country.name} has a population of ${country.population} `);
	})
}

const showCapitalFrance = function(data){
	const countries = data;
	console.log(countries[1].capital); //outputs paris
}

loadData("./data/countries.json",showPopulations);
loadData("./data/countries.json",showCapitalFrance);
```

### Callback functions
The idea of passing a function as an argument is probably new to you. We call this a **callback** i.e. ```showPopulations()``` and ```showCapitalFrance()``` are callbacks. Using callback functions is common practice in JavaScript, so it is worth having a good look at this example. Here are some links with further examples of callback functions.

* MDN - https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
* W3Schools - https://www.w3schools.com/js/js_callback.asp
* JavaScript info - https://javascript.info/callbacks

### Promises
Once you understand the idea of callbacks learn you can learn about promises and fully understand the code that the ```fetch()``` API uses. Again, here are some links:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
* https://web.dev/promises/
