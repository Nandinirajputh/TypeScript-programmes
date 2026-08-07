class Student {
    name: string;
    marks: number;

    constructor(name: string, marks: number) {
        this.name = name;
        this.marks = marks;
    }

    checkResult(): string {
        if (this.marks >= 35) {
            return "Pass";
        } else {
            return "Fail";
        }
    }

    displayDetails(): void {
        console.log(" Student Details ");
        console.log("Name: " + this.name);
        console.log("Marks: " + this.marks);
        console.log("Result: " + this.checkResult());
        console.log("   ");
    }
}
const student1 = new Student("Rahul", 80);
const student2 = new Student("Anita", 25);
student1.displayDetails();
student2.displayDetails();
student2.marks = 60;
console.log("\nAfter Updating Marks:");
student2.displayDetails();
