function isArmstrong(num: number): boolean {
    let original = num;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit * digit;
        num = Math.floor(num / 10);
    }

    return original === sum;
}
const isArmstrongArrow = (num: number): boolean => {
    let original = num;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit * digit;
        num = Math.floor(num / 10);
    }

    return original === sum;
};
const displayResult = (num: number): void => {
    console.log(
        `${num} ${isArmstrongArrow(num) ? "is" : "is not"} an Armstrong Number`
    );
};

// Function Calls
console.log(`153: ${isArmstrong(153)}`);
console.log(`123: ${isArmstrong(123)}`);

displayResult(370);
displayResult(407);
displayResult(250);
