class BankAccount {
    public accountHolder: string;
    private balance: number;
    private pin: number;
    protected transactionCount: number = 0;

    constructor(name: string, balance: number, pin: number) {
        this.accountHolder = name;
        this.balance = balance;
        this.pin = pin;
    }

    public deposit(amount: number, enteredPin: number): void {
        if (this.verifyPin(enteredPin)) {
            this.balance += amount;
            this.transactionCount++;
            console.log(`₹${amount} deposited successfully.`);
            console.log(`Current Balance: ₹${this.balance}`);
        } else {
            console.log("Incorrect PIN. Deposit failed.");
        }
    }

    private verifyPin(pin: number): boolean {
        return this.pin === pin;
    }
}

class PremiumBankAccount extends BankAccount {
    public showTransactions(): void {
        console.log(`Total Transactions: ${this.transactionCount}`);
    }
}

const account = new BankAccount("Akhil", 10000, 1234);

console.log(`Welcome, ${account.accountHolder}!`);
account.deposit(2500, 1234);

const premium = new PremiumBankAccount("Priya", 20000, 5678);
premium.deposit(3000, 5678);
premium.showTransactions();