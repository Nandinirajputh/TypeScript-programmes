namespace Company {

    export class Employee {
        display(): void {
            console.log("Welcome to ABC Technologies");
        }
    }

}

let emp = new Company.Employee();
emp.display();