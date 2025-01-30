const library = [];

//cosntructora
function Book(title, numberOfPages, author,read){
    this.title=title;
    this.numberOfPages=numberOfPages;
    this.author=author;
    this.read=read
}

function addBookToLibrary(title, numberOfPages, author,read){
    book = new Book(title, numberOfPages, author,read);
    library.push(book);
    displayBooks();
}

// Ejemplo de uso
addBookToLibrary("1984", 328, "George Orwell", false);
addBookToLibrary("El Principito", 96, "Antoine de Saint-Exupéry",true);

function displayBooks(){
    const libraryContainer = document.getElementById("libraryContainer");

    libraryContainer.innerHTML = "";

    library.forEach((book) =>{
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");

        bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p>Autor: ${book.author}</p>
            <p>Páginas: ${book.numberOfPages}</p>
            <p>Leído: ${book.read ? "Sí" : "No"}</p>
        `;
        
        libraryContainer.appendChild(bookElement);

    })
}

//Manejo de los botones del formulario
const newBookButton = document.getElementById("newBookButton");
const bookForm = document.getElementById("bookForm");
const bookDialog = document.getElementById("bookDialog");
const cancelButton = document.getElementById("cancelButton");

//Mostrar el formulario cuando se haga click en "Nuevo libro"
newBookButton.addEventListener("click", ()=>{
    bookDialog.showModal();
});

//Ocultar el formulario cuando se haga click en "Cancelar"
cancelButton.addEventListener("click", ()=>{
    bookDialog.close();
});

//Manejo de los valores del formulario
bookForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, pages, author, read);

    bookForm.reset();
    bookDialog.close();
});



displayBooks();

console.log(library);