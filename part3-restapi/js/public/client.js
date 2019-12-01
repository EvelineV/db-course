// client-side js
// run by the browser each time your view template referencing it is loaded

console.log('hello world :o');

let cats = [];

// define variables that reference elements on our page
const catsList = document.getElementById('cats');
const catsForm = document.forms[0];
const catInput = catsForm.elements['cat'];

// a helper function to call when our request for cats is done
const getCatsListener = function() {
  // parse our response to convert to JSON
  cats = JSON.parse(this.responseText);

  // iterate through every cat and add it to our page
  cats.forEach( function(row) {
    appendNewCat(row.cat);
  });
}

// request the cats from our app's sqlite database
const catRequest = new XMLHttpRequest();
catRequest.onload = getCatsListener;
catRequest.open('get', '/getCats');
catRequest.send();

// a helper function that creates a list item for a given cat
const appendNewCat = function(cat) {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = cat;
  catsList.appendChild(newListItem);
}

// listen for the form to be submitted and add a new cat when it is
catsForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();

  // get cat value and add it to the list
  cats.push(catInput.value);
  appendNewCat(catInput.value);

  // reset form 
  catInput.value = '';
  catInput.focus();
};
