const library = [];


class Book{
    constructor(title, numberOfPages, author,read){
        this.title=title;
        this.numberOfPages=numberOfPages;
        this.author=author;
        this.read=read;
    }

    toggleReadStatus(){
        this.read = !this.read;
    }
}

class Library{
    constructor(){
        this.books = [];
    }

    addBook(title, numberOfPages, author, read){
        const book = new Book(title, numberOfPages, author, read);
        this.books.push(book);
        this.displayBooks();
    }

    removeBook(index){
        this.books.splice(index,1);
        this.displayBooks();
    }

    toggleReadStatus(index){
        this.books[index].toggleReadStatus();
        this.displayBooks();
    }

    displayBooks(){
        const libraryContainer = document.getElementById("libraryContainer");
        libraryContainer.innerHTML = "";

        this.books.forEach((book, index) =>{
            const bookElement = document.createElement("div");
            bookElement.classList.add("book");

            bookElement.innerHTML = `
                <h3>${book.title}</h3>
                <p>Autor: ${book.author}</p>
                <p>Páginas: ${book.numberOfPages}</p>
                <p>Leído: ${book.read ? "Sí" : "No"}</p>
                <button class="removeBookButton" data-index="${index}">Eliminar</button>
                <label>
                    <input type="checkbox" class="readStatusCheckbox" data-index="${index}" ${book.read ? "checked" : ""}>
                    Leido
                </label>
            `;

            libraryContainer.appendChild(bookElement);

            //añadimos el evento de eliminación al botón de cada libro
            const removeBookButton = bookElement.querySelector(".removeBookButton");
            removeBookButton.addEventListener("click", (event)=>{
                const indexToRemove = event.target.getAttribute("data-index");
                this.removeBook(indexToRemove);
            })

            //checkbox de leído
            const readStatusCheckbox = bookElement.querySelector(".readStatusCheckbox");
            readStatusCheckbox.addEventListener("change", (event)=>{
                const indexToToggle = event.target.getAttribute("data-index");
                this.toggleReadStatus(indexToToggle);
            })


        })
    }

    removeBook(index){
        this.books.splice(index,1)
        this.displayBooks()
    }
}


// Ejemplo de uso

const myLibrary = new Library();

myLibrary.addBook("1984", 328, "George Orwell", false);
myLibrary.addBook("El Principito", 96, "Antoine de Saint-Exupéry",true);

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

    myLibrary.addBook(title, pages, author, read);

    bookForm.reset();
    bookDialog.close();
});





