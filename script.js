let myLibrary = [];

function Book(title, author, pages, isRead) {

    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.year = year
}

function addBookToLibrary() {
    const newBook = new Book(title, author, pages, isRead, year);
    myLibrary.push(newBook);
}

const title = prompt("Enter title of the book:");
const author = prompt("Enter author of the book:");
const pages = prompt("Enter how many pages the book has:");
const isRead = prompt("Have you read the book?:");
const year = prompt("What year did the book come out?:");

console.log(addBookToLibrary(title, author, pages, isRead, year));
console.log(myLibrary);
//const theHobbit = new Book('The Hobbit', 'by J.R.R. Tolkien,', '295 pages,', 'not read yet', '1937')