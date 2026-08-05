import { Armstrong } from "./4.armstrong";

export function displayResult(num: number): void {
    const obj = new Armstrong(num);

    if (obj.isArmstrong()) {
        console.log(`${num} is an Armstrong Number`);
    } else {
        console.log(`${num} is not an Armstrong Number`);
    }
}