class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title}`;
    }
}

let book = new Book("Algoritmos para viver", "Brian", 500);
let book2 = new Book("Um Exu em Nova York", "Cidinha da Silva", 100);

console.log(book, book2);
console.log(book.read(),book2.read())

class ITBook extends Book {
    constructor(title,author,pages,technology) {
        super(title,author,pages);
        this.technology = technology;
    }
}

let itBook = new ITBook("Algoritmos para viver", "Brian", 500, "Algoritmos");

console.log(itBook,itBook.title,itBook.read());

class Person {
    constructor (name){
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

let person = new Person("Pedro");
console.log(person.name);

person.name = "Tadeu";
console.log(person.name);