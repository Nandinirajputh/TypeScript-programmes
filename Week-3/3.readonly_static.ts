class Armstrong {
    public static readonly programName: string = "Armstrong Number Checker";
    public static totalChecks: number = 0;

    public readonly number: number;

    constructor(num: number) {
        this.number = num;
        Armstrong.totalChecks++;
    }

    public static showProgramInfo(): void {
        console.log(`Program: ${Armstrong.programName}`);
    }

    public displayResult(): void {
        let temp = this.number;
        let sum = 0;
        const digits = this.number.toString().length;

        while (temp > 0) {
            const digit = temp % 10;
            sum += Math.pow(digit, digits);
            temp = Math.floor(temp / 10);
        }

        if (sum === this.number) {
            console.log(`${this.number} is an Armstrong Number`);
        } else {
            console.log(`${this.number} is not an Armstrong Number`);
        }
    }
}

console.log(Armstrong.programName);
Armstrong.showProgramInfo();

const num1 = new Armstrong(153);
const num2 = new Armstrong(9474);

num1.displayResult();
num2.displayResult();

console.log(`Total Checks: ${Armstrong.totalChecks}`);
