class Employee {
    employeeName: string;
    employeeId: number;
    salary: number;
    bonusPercentage: number;

    constructor(name: string, id: number, salary: number, bonus?: number) {
        this.employeeName = name;
        this.employeeId = id;
        this.salary = salary;
        this.bonusPercentage = bonus ?? 10;
    }

    calculateTotalSalary(): number {
        const bonusAmount = (this.salary * this.bonusPercentage) / 100;
        return this.salary + bonusAmount;
    }

    displayDetails(): void {
        console.log("------ Employee Details ------");
        console.log(`Employee Name: ${this.employeeName}`);
        console.log(`Employee ID: ${this.employeeId}`);
        console.log(`Salary: ${this.salary}`);
        console.log(`Bonus Percentage: ${this.bonusPercentage}%`);
        console.log(`Total Salary: ${this.calculateTotalSalary()}`);
        console.log("------------------------------\n");
    }
}

const employee1 = new Employee("Ravi", 101, 40000);
const employee2 = new Employee("Sneha", 102, 55000, 15);

employee1.displayDetails();
employee2.displayDetails();

employee2.salary = 60000;

console.log(
    `Updated Total Salary for ${employee2.employeeName}: ${employee2.calculateTotalSalary()}`
);