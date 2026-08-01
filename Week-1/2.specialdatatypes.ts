let employeeData: any = 101;
employeeData = "Rahul";
employeeData = true;

let userInput: unknown = "Software Developer";

if (typeof userInput === "string") {
    console.log("Role Length:", userInput.length);
}

function displayStatus(status: string): void {
    console.log("STATUS:", status);
}

displayStatus("Employee details loaded successfully!");