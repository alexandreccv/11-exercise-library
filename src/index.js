const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => {
  return books.filter((book) => 
    book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
  ); 
};


const oldBooksOrdered = (year) => {
  const sixtyYearsDiff = year -60;
  
  return books
  .filter((book) => book.releaseYear <= sixtyYearsDiff)
  .sort((a,b) => a.releaseYear - b.releaseYear);
};

const booksByAuthorBirthYear = (birthYear) => {
  // escreva seu código aqui
};

const fantasyOrScienceFictionAuthors = () => {
  // escreva seu código aqui
};

const oldBooks = (year) => {
  // escreva seu código aqui
};

const authorWith3DotsOnName = () => {
  // escreva seu código aqui
};

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
