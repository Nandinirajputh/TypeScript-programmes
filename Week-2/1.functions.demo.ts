function getStudent(name: string): string {
    return `Student Name: ${name}`;
}
function getDepartment(dept: string = "AIML"): string {
    return `Department: ${dept}`;
}
function studentDetails(id: number, section?: string): void {
    console.log(`Student ID: ${id}`);

    if (section) {
        console.log(`Section: ${section}`);
    }
}
function calculateAverage(...marks: number[]): number {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}
console.log(getStudent("Nandini"));

console.log(getDepartment());
console.log(getDepartment("CSE"));

studentDetails(101);
studentDetails(102, "A");

const average = calculateAverage(85, 90, 88, 92);
console.log(`Average Marks: ${average}`);