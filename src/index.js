const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () =>
  books.filter((book) =>
    book.genre === 'Ficção Científica' || book.genre === 'Fantasia');

const oldBooksOrdered = (year) => {
  const sixtyYearsDiff = year - 60;

  return books
    .filter((book) => book.releaseYear <= sixtyYearsDiff)
    .sort((a, b) => a.releaseYear - b.releaseYear);
};

const booksByAuthorBirthYear = (birthYear) =>
  books
    .filter((book) => book.author.birthYear === birthYear)
    .map((book) => book.name);

const fantasyOrScienceFictionAuthors = () =>
  books
    .filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
    .map((book) => book.author.name)
    .sort();

const oldBooks = (year) => {
  const moreSixtyYears = year - 60;

  return books
    .filter((book) => book.releaseYear <= moreSixtyYears)
    .map((book) => book.name);
};

function authorWith3DotsOnName() {
  return books.find((book) => {
    const authorName = book.author.name;
    const initials = authorName.split(' ').filter((word) => word.endsWith('.'));
    return initials.length >= 3;
  }).name;
}

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
