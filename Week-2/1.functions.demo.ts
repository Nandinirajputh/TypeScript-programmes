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
function checkNumber(num: number = 153): void {
    if (isArmstrong(num)) {
        console.log(`${num} is an Armstrong Number.`);
    } else {
        console.log(`${num} is not an Armstrong Number.`);
    }
}
function displayNumber(num: number, message?: string): void {
    console.log(`Number: ${num}`);
    if (message) {
        console.log(`Message: ${message}`);
    }
}
const cube = (n: number): number => n * n * n;
checkNumber();
checkNumber(370);
checkNumber(123);

displayNumber(153);
displayNumber(370, "Valid Armstrong Number");

console.log(`Cube of 5: ${cube(5)}`);
