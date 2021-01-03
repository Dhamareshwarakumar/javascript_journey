// Book Class: Represents a Book
// UI Class: Handle UI Tasks
// Store Class: Handles Storage
// Event: Display Books
// Event: Add a Book
// Event: Remove a Book


// Book Class: Represents a Book

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks

class UI {
    static displayBooks() {

        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `;
        list.appendChild(row);
    }

    static deleteBook(book) {
        if(book.classList.contains('delete')) {
            book.parentElement.parentElement.remove();
        }
    }

    static showAlerts(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // Vanish Alert in 3 seconds
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}


// Store Class: Handles Storage
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}


// Event: Display Books
// document.addEventListener("DOMContentLoaded", UI.displayBooks);
document.addEventListener("DOMContentLoaded", UI.displayBooks());


// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (event) => {
    // Prevent actual submit
    event.preventDefault();

    // gettind form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Validations
    if(title === '' || author === '' || isbn ==='') {
       UI.showAlerts('Please fill in all the fields', 'danger');
    }
    else {   
        // Instantiate Book
        const book = new Book(title, author, isbn);
        
        // Add Book To UI
        UI.addBookToList(book);
        UI.showAlerts(`${book.title} added successfully`, 'success');
        
        // Add Book to store
        Store.addBook(book);

        // clear fileds
        UI.clearFields();
    }
});


// Event: Remove a Book

document.querySelector('#book-list').addEventListener('click', (e)=> {
    UI.deleteBook(e.target);
    UI.showAlerts(`Book Removed`, 'success')
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});