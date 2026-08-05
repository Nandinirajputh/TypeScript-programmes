function printValue<T>(value: T): void {
    console.log(value);
}

printValue<number>(153);
printValue<string>("Armstrong Number");
printValue<boolean>(true);