class Armstrong {
    public number: number;
    private result: number = 0;
    protected digits: number = 0;

    constructor(num: number) {
        this.number = num;
    }

    public checkArmstrong(): void {
        let temp = this.number;
        let original = this.number;

        while (temp > 0) {
            this.digits++;
            temp = Math.floor(temp / 10);
        }

        temp = original;
        this.result = 0;

        while (temp > 0) {
            let digit = temp % 10;
            this.result += Math.pow(digit, this.digits);
            temp = Math.floor(temp / 10);
        }

        if (this.verify()) {
            console.log(`${original} is an Armstrong Number.`);
        } else {
            console.log(`${original} is not an Armstrong Number.`);
        }
    }

    private verify(): boolean {
        return this.result === this.number;
    }
}

class ArmstrongDetails extends Armstrong {
    public showDigits(): void {
        console.log(`Number of Digits: ${this.digits}`);
    }
}

const num1 = new Armstrong(153);
num1.checkArmstrong();

const num2 = new ArmstrongDetails(9474);
num2.checkArmstrong();
num2.showDigits();
