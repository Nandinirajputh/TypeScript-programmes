export class Armstrong {
    constructor(public number: number) {}

    isArmstrong(): boolean {
        let temp = this.number;
        let sum = 0;
        const digits = this.number.toString().length;

        while (temp > 0) {
            const digit = temp % 10;
            sum += Math.pow(digit, digits);
            temp = Math.floor(temp / 10);
        }

        return sum === this.number;
    }
}