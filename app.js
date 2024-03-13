const myLibrary = [];
const submitBtn = document.querySelector("#submit-btn");
const addNewBookBtn = document.querySelector("#add-new-book");
const modal = document.querySelector(".modal");
const bookForm = document.querySelector(".form");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const bookTitle = document.querySelector("#book-title");
  const bookAuthor = document.querySelector("#book-author");
  const bookPages = document.querySelector("#book-pages");
  const isBookRead = document.querySelector("#book-read");
  const book = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    isBookRead.value
  );
  myLibrary.push(book);
}
// TODO: Make modal close after submit and clear the form inputs
submitBtn.addEventListener("click", () => {
  addBookToLibrary();
  bookForm.reset();
});
addNewBookBtn.addEventListener("click", () => {
  modal.showModal();
});
