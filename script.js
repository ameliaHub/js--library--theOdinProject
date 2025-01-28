const library = [];

//cosntructora
function Book(title, numberOfPages, author){
    this.title=title;
    this.numberOfPages=numberOfPages;
    this.author=author;
}

function addBookToLibrary(title, numberOfPages, author){
    book = new Book(title, numberOfPages, author);
    library.push(book);
}

// Ejemplo de uso
addBookToLibrary("1984", 328, "George Orwell");
addBookToLibrary("El Principito", 96, "Antoine de Saint-Exupéry");

console.log(library);