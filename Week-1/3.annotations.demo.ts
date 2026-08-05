let libraryName: string = "Central Library";
let totalBooks: number = 5000;
let isOpen: boolean = true;

function getLibraryInfo(name: string, books: number): string {
    return `${name} contains ${books} books.`;
}

let categories: string[] = [
    "Science",
    "Technology",
    "History",
    "Literature"
];

const summary: string = getLibraryInfo(libraryName, totalBooks);

console.log(summary);
console.log(`Book Categories: ${categories.join(", ")}`);
console.log(`Library Open: ${isOpen ? "Yes" : "No"}`);