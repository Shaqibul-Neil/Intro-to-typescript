class BankAccount {
  constructor(
    public readonly userId: number,
    public userName: string,
    private _balance: number,
  ) {}

  //   //balance set
  //   addBalance(balance: number) {
  //     this._balance += balance;
  //   }

  //balance set
  set addBalance(amount: number) {
    this._balance += amount;
  }

  //   //balance get
  //   getBalance() {
  //     return this._balance;
  //   }

  get getBalance() {
    return this._balance;
  }
}

const Neil = new BankAccount(12, "Neil", 600);
Neil.addBalance = 100;
Neil.addBalance = 10;
console.log(Neil);
console.log(Neil.getBalance);
