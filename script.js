let myLibrary = [];

function Book(title, author, pages, isRead) {

    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.info = function() {
        console.log(title, author, pages, isRead)
    }
}

function addBookToLibrary() {

}

const theHobbit = new Book('The Hobbit', 'by J.R.R. Tolkien,', '295 pages,', 'not read yet')

theHobbit.info() //The Hobbit by J.R.R. Tolkien, 295 pages, not read yet