const films=[
  {title:"Jaws", year:1975, duration:124, certificate:"15"},
  {title:"Get Out", year:2017, duration:117, certificate:"15"},
  {title:"Winter's Bone", year:2010, duration:100, certificate:"15"},
  {title:"The Incredibles", year:2004, duration:115, certificate:"U"},
]

function doSearch()
{

  var textBox = document.getElementById("search-box").value;
  
  
  let searchTerm = textBox;
  let title = films.title;
  const filmSearch = films.filter(function(film){
    if(film.title === film.title.search(searchTerm)){
      return true
    }else{
      return false
    }
  })
  films.forEach(function(film){
    console.log(`${film.title}`)
  });
  
  
  /*filmSearch.forEach(function(film){
    console.log(`${film.title}`)
  });*/
  
  /*
  const filmsFragment = document.createDocumentFragment();
  films.forEach(function(film){
    const filmName = document.createElement("h3");
    const filmInfo = document.createElement("p");

    filmName.textContent = `${film.title} (${film.certificate})`;
    filmInfo.textContent = `Film Duration: ${film.duration} Year of Release: ${film.year} `;

    filmsFragment.appendChild(filmName);
    filmsFragment.appendChild(filmInfo);
  });
  const filmDiv = document.getElementById("film-list");
  filmDiv.appendChild(filmsFragment);
  */

} // end of doSearch, don't remove this line



//1. Add some code so that the function doSearch() runs whenever the user clicks the GO button. You will need to use querySelector to grab hold of the button and then add an event listener to it. See https://github.com/CHT2531/js-dom-recap/blob/master/notes.md#events for an example.

//2. Add some code in doSearch() so that each film title is displayed in the console (use a forEach to loop over the array of film objects).

//3. Modify the code so that instead of displaying the films in the console they are displayed in the HTML page as <li> elements (look in the HTML page for the <div> element called film-list). See https://github.com/CHT2531/js-dom-recap/blob/master/notes.md#inserting-multiple-elements for a similar example.

//4. Modify the code so that the certificate for each film is displayed next to the film title e.g. Jaws (15)

//5. Modify the code in doSearch() so that it also displays whatever the user has typed into the text box (the user's search term) in the console. Again use querySelector to grab hold of the text box before displaying it's value. Put this code at the start of doSearch(). See https://github.com/CHT2531/js-dom-recap/blob/master/notes.md#working-with-form-controls for an example.

//6. Modify the code in doSearch() so that only films that match the user's search term are displayed i.e. if the user enters "Jaws", only Jaws should be displayed in the console. You will need to use a filter e.g. https://github.com/CHT2531/javascript-recap/blob/master/notes.md#filter-example.

// 7. Modify the code so that the user doesn't have to enter the exact search term e.g. if they enter 'ja' they should get Jaws as a result. The search() method of JavaScript strings should help you. You may have an example from a previous practical or uncomment the following example to see how it works:

/*
let searchTerm = "a";
let title = "Jaws";
let film = films[0];
console.log(film.title.search(searchTerm)) //outputs 1, the search term is found at the second character in the string
if(film.title.search(searchTerm)>-1){
  console.log(`The search term '${searchTerm}' was found.`);
}else{
  console.log(`The search term ${searchTerm} was not found.`);
}
*/

//8. A problem with this is that when the user searches again the results get added to the previous results. Add some code in doSearch() that will remove the previous search results. See https://github.com/CHT2531/js-dom-recap/blob/master/notes.md#removing-multiple-elements for a similar example.

//9. Modify your application so that the user doesn't have to use the correct case i.e. they can enter 'jaws' and still get the film Jaws as a result. If you aren't sure how to do this, do some research into the toLowerCase() method of JavaScript strings.

//10. It would be good if the search ran whenever the user types into the search box i.e. they don't have to press the GO button. Add some code to your app so that the search runs in response to a keyup event.

//11. One problem with the above is that if there isn't a search term we get a full list of films (try typing in a search term and then deleting it). Modify the code so that it only searches if there is at least one character in the search box. If you aren't sure how to do this, do some research into the 'length' property of JavaScript strings.

//12. If you look at the code in doSearch() you will probably find that it stretches over many different lines. How can you re-factor the code to split doSearch() into a number of smaller, more focussed functions?
