
function displayEmployee(name: string, salary: number): void {
    console.log("Employee Name: " + name);
    console.log("Salary: " + salary);
}
function yearlySalary(monthlySalary: number): number {
    return monthlySalary * 12;
function isEligible(salary: number): boolean {
    if (salary >= 30000) {
        return true;
    } else {
        return false;
    }
}
displayEmployee("Rahul", 35000);

let annual = yearlySalary(35000);
console.log("Yearly Salary: " + annual);

if (isEligible(35000)) {
    console.log("Employee is eligible for bonus.");
} else {
    console.log("Employee is not eligible for bonus.");
}
}
