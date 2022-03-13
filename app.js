let myLibrary= [];
let newBook;

function Book(title, author, pages, bookRead) {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
    this.bRead = bookRead.value; 
};

function addBookToLibrary(){
    console.log("addBookToLibrary function ran.");
    bookFormBg.style.display = 'none';
    let newBook = Book(title, author, pages, bookRead);
    console.log(newBook);
   /*  myLibrary.push(newBook);
    saveArray();
    bookForm.reset(); */
}
function saveArray(){
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function hideForm() {
    bookFormBg.style.display = "none"
}

//Link to UI Elements
const bookForm = document.getElementById('bookForm');
const openForm = document.getElementById('openForm');
const closeForm = document.getElementById('closeForm');
const submitBook = document.getElementById('submitBook');
const bookFormBg = document.getElementById('bookFormBg');
const pages = document.getElementById('bookPages');
const title = document.getElementById('bookTitle');
const bookRead = document.getElementById('bookRead');
const author = document.getElementById('bookAuthor');

//Event Listeners
bookForm.addEventListener('submit', (e) =>{
    e.preventDefault();   
    addBookToLibrary();
    
})
openForm.addEventListener('click',() => bookFormBg.style.display = "block")
closeForm.addEventListener('click', () => {
    bookForm.reset();
    hideForm();
})
window.addEventListener("click", (e) => {
    if(e.target == bookFormBg){
        bookFormBg.style.display ='none';
        bookForm.reset();
    }
})
