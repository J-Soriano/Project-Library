//Start Program
let myLibrary= [];
let book1 = new Book ('Book1Test', 'author: John Smith', 205, "I have not read");


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
};
Book.prototype.info = function() {
    alert(this.title+" by "+this.author+", "+this.pages+" pages, "+this.read)
}

function addBookToLibrary(){
    Book();
}

/* book1.info(); */



//Link to UI Elements
const addBook = document.getElementById('addBook');
const bookFormBg = document.getElementById('bookFormBG');
const closeForm1 = document.getElementById('closeForm');
//Event Listeners
/* addBook.addEventListener('click', () => addBookToLibrary()) */

//Click Functions
addBook.onclick = function() {
    bookFormBg.style.display = "block";
}
closeForm1.onclick = function () {
    bookFormBg.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == bookFormBg) {
      bookFormBg.style.display = "none";
    }
  }