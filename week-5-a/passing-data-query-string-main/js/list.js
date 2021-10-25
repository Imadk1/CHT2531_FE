function loadData(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
} //end of loadData()

function speciesList(species)
{
	const speciesFragment = document.createDocumentFragment();
	const results = species.results;

	console.log(species.name)

	results.forEach(function(species){
		const newLi=document.createElement("li");
		const newLink=document.createElement("a");
		newLink.textContent=species.name;
		//adds a querystring to the URL e.g. details.html?id=2
		newLink.setAttribute("href","details.html?uid="+species.uid);
		newLi.appendChild(newLink);
		speciesFragment.appendChild(newLi);
	})

	const speciesList=document.querySelector("#species-list");
	speciesList.appendChild(speciesFragment);
}

function init(){
	loadData("https://www.swapi.tech/api/species",speciesList)
}

init();
