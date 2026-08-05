class Student {
    public static readonly collegeName: string = "SVECW Engineering College";
    public static totalStudents: number = 0;

    public readonly rollNumber: string;
    public studentName: string;

    constructor(name: string, rollNo: string) {
        this.studentName = name;
        this.rollNumber = rollNo;
        Student.totalStudents++;
    }

    public static showCollegeInfo(): void {
        console.log(`Welcome to ${Student.collegeName}`);
    }

    public displayStudent(): void {
        console.log(`Student Name: ${this.studentName}`);
        console.log(`Roll Number: ${this.rollNumber}`);
    }
}

console.log(Student.collegeName);
Student.showCollegeInfo();

const student1 = new Student("Anjali", "22A91A0501");
const student2 = new Student("Rohit", "22A91A0502");

student1.displayStudent();
student2.displayStudent();

console.log(`Total Students: ${Student.totalStudents}`);