class BankAccount {
  constructor(
    public readonly userId: number,
    public userName: string,
    private _balance: number,
  ) {}
  addBalance(balance: number) {
    this._balance += balance;
  }
}

const Neil = new BankAccount(12, "Neil", 600);
Neil.addBalance(100);
console.log(Neil);
