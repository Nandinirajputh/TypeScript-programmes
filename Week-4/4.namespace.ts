namespace ArmstrongUtility {

    export function check(num: number): void {

        let temp = num;
        let sum = 0;
        const digits = num.toString().length;

        while (temp > 0) {
            const digit = temp % 10;
            sum += Math.pow(digit, digits);
            temp = Math.floor(temp / 10);
        }

        if (sum === num) {
            console.log(`${num} is an Armstrong Number`);
        } else {
            console.log(`${num} is not an Armstrong Number`);
        }
    }
}

ArmstrongUtility.check(153);
ArmstrongUtility.check(125);