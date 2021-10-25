function loadData(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
} //end of loadData()

function planetsContent(planetData)
{	
	var planetEl=document.querySelector("#planet");
	var planets = planetData.result.properties;
	planetEl.textContent = `Home Planet: ${planets.name}`;

}

function speciesContent(speciesData)
{
	var titleEl=document.querySelector("#title");
	var designationEl=document.querySelector("#designation");
	var heightEl=document.querySelector("#height");
	var lifeEl=document.querySelector("#lifespan");
	var hairsEl=document.querySelector("#hair-colours");
	var skinEl=document.querySelector("#skin-colours");
	var eyeEl=document.querySelector("#eye-colours");
	var languageEl=document.querySelector("#language");

	var species = speciesData.result.properties;

	titleEl.textContent = `${species.name} - ${species.classification}`;
	designationEl.textContent = `Designation: ${species.designation}`;
	heightEl.textContent = `Height: ${species.average_height}`;
	lifeEl.textContent = `Lifespan: ${species.average_lifespan}`;
	hairsEl.textContent = `Hair Colours: ${species.hair_colors}`;
	skinEl.textContent = `Skin Colours: ${species.skin_colors}`;
	eyeEl.textContent = `Eye Colours: ${species.eye_colors}`;
	languageEl.textContent = `Language: ${species.language}`;
}


function init(){
	//URLSearchParams provides an easy method for getting data from the querystring e.g. details.html?id=3
	//see https://davidwalsh.name/query-string-javascript for more info
	var urlParams = new URLSearchParams(window.location.search);
	var uid = urlParams.get("uid");

	loadData("https://www.swapi.tech/api/species/"+uid,speciesContent)
	loadData("https://www.swapi.tech/api/planets/"+uid,planetsContent)
}


init();
