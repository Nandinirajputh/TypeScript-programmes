interface Person {
    name: string;
}

function showName<T extends Person>(obj: T): void {
    console.log("Name:", obj.name);
}

showName({ name: "Nandini" });