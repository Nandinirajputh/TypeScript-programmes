function printData<T>(data: T): void {
    console.log(data);
}

printData<string>("Employee");
printData<number>(101);