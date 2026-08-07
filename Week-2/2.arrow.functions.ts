
function getStudent(name: string): string {
    return "Student Name: " + name;
}
const getMarks = (marks: number): string => {
    return "Marks: " + marks;
};

const displayStudent = (name: string, marks: number): void => {
    console.log(getStudent(name));
    console.log(getMarks(marks));
};
console.log(getStudent("Ravi"));
console.log(getMarks(85));

displayStudent("Anu", 92);
displayStudent("Kiran", 78);