const myLibrary = [];
const submitBtn = document.querySelector("#submit-btn");
const addNewBookBtn = document.querySelector("#add-new-book");
const modal = document.querySelector(".modal");
const bookForm = document.querySelector(".form");
const modalCloseBtn = document.querySelector("#close-btn");
const bookContainer = document.querySelector(".book-container");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const bookTitleInput = document.querySelector("#book-title");
  const bookAuthorInput = document.querySelector("#book-author");
  const bookPagesInput = document.querySelector("#book-pages");
  const isBookReadInput = document.querySelector("#book-read");
  const book = new Book(
    bookTitleInput.value,
    bookAuthorInput.value,
    bookPagesInput.value,
    isBookReadInput.value
  );
  myLibrary.push(book);
  createBook();
}

// TODO: Make this dynamic

function createBook() {
  const bookItem = document.createElement("div");
  const bookTitle = document.createElement("p");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  const bookReadStatus = document.createElement("p");
  const removeBookBtn = document.createElement("button");
  const readStatusBtn = document.createElement("button");
  const bookBtnContainer = document.createElement("div");
  bookItem.classList.add("book");
  bookBtnContainer.classList.add("book-btn-container");
  bookTitle.classList.add("title");
  bookTitle.innerText = myLibrary[0].title;
  bookItem.appendChild(bookTitle);
  bookAuthor.classList.add("author");
  bookAuthor.innerText = myLibrary[0].author;
  bookItem.appendChild(bookAuthor);
  bookPages.classList.add("pages");
  bookPages.innerText = `${myLibrary[0].pages} pages`;
  bookItem.appendChild(bookPages);
  bookReadStatus.classList.add("read-status");
  bookReadStatus.innerText = myLibrary[0].read;
  bookItem.appendChild(bookReadStatus);
  removeBookBtn.classList.add("btn");
  removeBookBtn.innerText = "Remove book";
  bookBtnContainer.appendChild(removeBookBtn);
  readStatusBtn.classList.add("btn");
  readStatusBtn.innerText = "Mark as read";
  bookBtnContainer.appendChild(readStatusBtn);
  bookItem.appendChild(bookBtnContainer);
  bookContainer.appendChild(bookItem);
}

bookForm.addEventListener("submit", () => {
  addBookToLibrary();
  bookForm.reset();
});

addNewBookBtn.addEventListener("click", () => {
  modal.showModal();
});

modalCloseBtn.addEventListener("click", () => {
  modal.close();
});
