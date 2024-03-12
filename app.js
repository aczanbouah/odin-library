const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  book = new Book("MJ", "Last dance", 69, true);
  myLibrary.push(book);
  return myLibrary;
}
