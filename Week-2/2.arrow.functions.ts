function calculatePercentage(total: number, obtained: number): number {
    return (obtained / total) * 100;
}
const calculatePercentageArrow = (total: number, obtained: number): number => {
    return (obtained / total) * 100;
};
const greetStudent = (name: string): string => {
    return `Welcome, ${name}!`;
};

const totalMarks: number = 600;
const obtainedMarks: number = 540;

console.log(greetStudent("Nandini"));

const percentage1 = calculatePercentage(totalMarks, obtainedMarks);
console.log(`Percentage (Normal Function): ${percentage1}%`);

const percentage2 = calculatePercentageArrow(totalMarks, obtainedMarks);
console.log(`Percentage (Arrow Function): ${percentage2}%`);