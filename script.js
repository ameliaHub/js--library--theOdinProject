const library = [];

//cosntructora
function Book(title, numberOfPages, author,read){
    this.title=title;
    this.numberOfPages=numberOfPages;
    this.author=author;
    this.read=read;
}


//alternar el estado de lectura (lo comparten todos los objetos libro y al usarlo en vez
//de crear una funcion en cada objeto usamos prototype y no duplicamos codigo)
Book.prototype.toggleReadStatus = function(){
    this.read = !this.read;
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

    library.forEach((book, index) =>{
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
        
        //<button class="toggleReadButton" data-index="${index}">Leído</button>

        libraryContainer.appendChild(bookElement);

        //añadimos el evento de eliminación al botón de cada libro
        const removeBookButton = bookElement.querySelector(".removeBookButton");
        removeBookButton.addEventListener("click", (event)=>{
            const indexToRemove = event.target.getAttribute("data-index");
            removeBookFromLibrary(indexToRemove);
        })

        //añadimos el evento de cambio de estado de lectura (USANDO BOTÓN EN VEZ DE CHECKBOX)
        //const toggleReadButton = bookElement.querySelector(".toggleReadButton");
        //toggleReadButton.addEventListener("click", (event)=>{
          //  const indexToToggle = event.target.getAttribute("data-index");
          //  toggleReadStatus(indexToToggle);
        //})

        const readStatusCheckbox = bookElement.querySelector(".readStatusCheckbox");
        readStatusCheckbox.addEventListener("change", (event)=>{
            const indexToToggle = event.target.getAttribute("data-index");
            toggleReadStatus(indexToToggle);
        })

    })
}


function removeBookFromLibrary(index){
    library.splice(index,1);
    displayBooks();
}

function toggleReadStatus(index){
    const book =library[index];
    book.toggleReadStatus();
    displayBooks();
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