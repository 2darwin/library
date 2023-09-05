let myLibrary = [];

function Book(title, author, pages, isRead, year) {

    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.year = year
}

function addBookToLibrary(title, author, pages, isRead, year) {
    let newBook = new Book(title, author, pages, isRead, year);
    myLibrary.push(newBook);
}


// Manually add some books to the library for demonstration
addBookToLibrary("1 The Catcher in the Rye", "J.D. Salinger", "234", "yes", "1951");
addBookToLibrary("2 To Kill a Mockingbird", "Harper Lee", "281", "no", "1960");
addBookToLibrary("3 1984", "George Orwell", "328", "yes", "1949");
addBookToLibrary("4 The Hobbit", "J.R.R. Tolkien", "295", "no", "1937");
addBookToLibrary("5 A Game of Thrones", "George R.R. Martin", "694", "no", "1996");
addBookToLibrary("6 The Maze Runner", "James Dashner", "375", "yes", "2009");

function displayBooks() {
  let bookContainer = document.getElementById("book-container");
  bookContainer.innerHTML = ""; // Clear previous content

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    let bookCard = document.createElement("div");
    bookCard.className = "book-card";
    bookCard.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <p>Read: ${book.isRead}</p>
    <p>Year: ${book.year}</p>
    `;

    //Create a button to remove a book
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-button";
    removeButton.addEventListener("click", () => removeBook(i)); //Call removeBook function with index i

    bookCard.appendChild(removeButton);
    bookContainer.appendChild(bookCard);
  }
}

function removeBook(index) {
  //Remove the book from the library array
  myLibrary.splice(index, 1);
  console.log("Removed", index)
  displayBooks();
}

// Call the displayBooks function to show the books on the page
displayBooks();

document.addEventListener('DOMContentLoaded', function() {
  let showFormButton = document.getElementById('showFormButton');
  let bookForm = document.getElementById('bookForm');
  let newBookForm = document.getElementById('newBookForm');
  let refresh = document.getElementById('refresh');

  refresh.addEventListener('click', function() {
    displayBooks();
  });

  showFormButton.addEventListener('click', function() {
    bookForm.style.display = 'block';
  });

  newBookForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let isRead = document.getElementById('isRead').value;
    let year = document.getElementById('year').value;

    addBookToLibrary(title, author, pages, isRead, year);

    console.log("New Book Details:");
    console.table(myLibrary);

    //Reset the form and hide it
    newBookForm.reset();
    bookForm.style.display = 'none';
  });
});