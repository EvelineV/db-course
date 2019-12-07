// client-side js
// run by the browser each time your view template referencing it is loaded

let items = [];

// define variables that reference elements on our page
const itemList = document.getElementById('items');

const itemHandler = items => items.forEach( row => {
  let newListItem = document.createElement("li");
  newListItem.textContent = row.name; // name being a column name
  itemList.appendChild(newListItem);
});

// connect to server when page is loaded or refreshed
window.addEventListener("load", 
  fetch("/List")
    .then(results => results.json())
    .then(itemHandler)
    .catch(error => console.error("Couldn't fetch data."))
);
