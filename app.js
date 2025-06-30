const myLibrary = [];
const submitBtn = document.querySelector("#submit-btn");
const addNewBookBtn = document.querySelector("#add-new-book");
const modal = document.querySelector(".modal");
const bookForm = document.querySelector(".form");
const modalCloseBtn = document.querySelector("#close-btn");
const bookContainer = document.querySelector(".book-container");
const bookTitleInput = document.querySelector("#book-title");
const bookAuthorInput = document.querySelector("#book-author");
const bookPagesInput = document.querySelector("#book-pages");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

function addBookToLibrary() {
  const isBookReadInput = document.querySelector(
    'input[name="user-book-read"]:checked'
  );
  const isBookRead = isBookReadInput.value === "read";

  const book = new Book(
    bookTitleInput.value,
    bookAuthorInput.value,
    bookPagesInput.value,
    isBookRead
  );
  myLibrary.push(book);
  storeToLocalStorage();
  createBook(book);
}

function createBook(book) {
  // Create elements
  const bookItem = document.createElement("div");
  const bookTitle = document.createElement("p");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  const bookReadStatus = document.createElement("p");
  const removeBookBtn = document.createElement("button");
  const readStatusBtn = document.createElement("button");
  const bookBtnContainer = document.createElement("div");

  // Style elements, add content and display them

  bookItem.classList.add("book");
  bookBtnContainer.classList.add("book-btn-container");
  bookTitle.classList.add("title");
  bookTitle.innerText = book.title;
  bookItem.appendChild(bookTitle);

  bookAuthor.classList.add("author");
  bookAuthor.innerText = book.author;
  bookItem.appendChild(bookAuthor);

  bookPages.classList.add("pages");
  bookPages.innerText = `${book.pages} pages`;
  bookItem.appendChild(bookPages);

  bookReadStatus.classList.add("read-status");
  bookReadStatus.innerText = book.read ? "Read" : "Not Read";
  bookItem.appendChild(bookReadStatus);

  removeBookBtn.classList.add("btn");
  removeBookBtn.innerText = "Remove book";
  removeBookBtn.addEventListener("click", () => {
    bookContainer.removeChild(bookItem);
    myLibrary.forEach((e) => {
      if (bookTitle.innerText === e.title) {
        myLibrary.splice(myLibrary.indexOf(e), 1);
      }
    });
    storeToLocalStorage();
  });
  bookBtnContainer.appendChild(removeBookBtn);

  readStatusBtn.classList.add("btn");
  readStatusBtn.innerText = book.read ? "Mark as unread" : "Mark as read";
  readStatusBtn.addEventListener("click", () => {
    const book = myLibrary.find((book) => book.title === bookTitle.innerText);
    book.toggleReadStatus();
    bookReadStatus.innerText = book.read ? "Read" : "Not Read";
    readStatusBtn.innerText = book.read ? "Mark as unread" : "Mark as read";
    storeToLocalStorage();
  });

  bookBtnContainer.appendChild(readStatusBtn);
  bookItem.appendChild(bookBtnContainer);
  bookContainer.appendChild(bookItem);
}

function storeToLocalStorage() {
  const stringifiedLibrary = JSON.stringify(myLibrary);
  localStorage.setItem("books", stringifiedLibrary);
}

function retrieveLocalStorage() {
  const retrievedLibrary = localStorage.getItem("books");
  return JSON.parse(retrievedLibrary);
}

document.addEventListener("DOMContentLoaded", () => {
  retrieveLocalStorage().forEach((bookInfo) => {
    const book = new Book(
      bookInfo.title,
      bookInfo.author,
      bookInfo.pages,
      bookInfo.read
    );
    createBook(book);
  });
});

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
