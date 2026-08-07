class Employee {
    public name: string;
    private salary: number;
    protected company: string;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
        this.company = "ABC Company";
    }

    public showDetails(): void {
        console.log("Employee Name: " + this.name);
        console.log("Salary: " + this.salary);
    }
}

class Manager extends Employee {
    public showCompany(): void {
        console.log("Company: " + this.company);
    }
}

// Creating Objects
const emp1 = new Employee("Rahul", 30000);
emp1.showDetails();

const emp2 = new Manager("Anita", 50000);
emp2.showDetails();
emp2.showCompany();