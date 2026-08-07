class Book {
    static libraryName: string = "City Library";
    readonly bookId: number;

    title: string;

    constructor(id: number, title: string) {
        this.bookId = id;
        this.title = title;
    }

    display(): void {
        console.log("Book ID: " + this.bookId);
        console.log("Book Title: " + this.title);
    }
}

console.log(Book.libraryName);
const book1 = new Book(101, "Python");
const book2 = new Book(102, "TypeScript");
book1.display();
book2.display();
