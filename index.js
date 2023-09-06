const fetch = require('node-fetch');

function fetchBooks() {
  // Return the fetch promise
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((books) => {
      renderBooks(books); // Call renderBooks with the retrieved books
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
    .then(books => {
      renderBooks(books);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
});

// Export the functions for testing purposes in Node.js
module.exports = { fetchBooks, renderBooks };