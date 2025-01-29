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

displayBooks();

console.log(library);