let studentName: string = "Nandini";
let studentAge: number = 20;
let isPlaced: boolean = false;

console.log("Data Type of Student Name is -->", typeof studentName);
console.log("Data Type of Student Age is -->", typeof studentAge);
console.log("Data Type of isPlaced is -->", typeof isPlaced);

function displayStudentDetails(name: string, age: number, placed: boolean): void {
    console.log(`Student Name: ${name}`);
    console.log(`Student Age: ${age}`);
    console.log(`Placed: ${placed}`);
}

displayStudentDetails(studentName, studentAge, isPlaced);