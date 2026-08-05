class ArmstrongChecker {
    number: number;

    constructor(num: number) {
        this.number = num;
    }

    checkArmstrong(): boolean {
        let original = this.number;
        let temp = this.number;
        let sum = 0;

        while (temp > 0) {
            let digit = temp % 10;
            sum += digit * digit * digit;
            temp = Math.floor(temp / 10);
        }

        return original === sum;
    }

    displayResult(): void {
        console.log("------ Armstrong Number ------");
        console.log(`Number: ${this.number}`);

        if (this.checkArmstrong()) {
            console.log(`${this.number} is an Armstrong Number.`);
        } else {
            console.log(`${this.number} is not an Armstrong Number.`);
        }

        console.log("------------------------------\n");
    }
}

const num1 = new ArmstrongChecker(153);
const num2 = new ArmstrongChecker(123);

num1.displayResult();
num2.displayResult();

num2.number = 370;

console.log(
    `After Updating Number: ${num2.number} -> ${
        num2.checkArmstrong() ? "Armstrong Number" : "Not an Armstrong Number"
    }`
);
