export class EmployeeLogic {
    empId: number;
    name: string;
    department: string;
    salary: number;

    constructor(empId: number, name: string, department: string, salary: number) {
        this.empId = empId;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    display(): void {
        console.log("Employee Details");
        console.log("Employee ID :", this.empId);
        console.log("Name        :", this.name);
        console.log("Department  :", this.department);
        console.log("Salary      :", this.salary);
    }
}