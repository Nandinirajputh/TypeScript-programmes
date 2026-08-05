interface NumberData {
    number: number;
}

function display<T extends NumberData>(obj: T): void {
    console.log(`Number: ${obj.number}`);
}

display({ number: 153 });
display({ number: 9474 });