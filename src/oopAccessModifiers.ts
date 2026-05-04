//Access Modifiers
class BankAccount {
  constructor(
    public readonly userId: number,
    public userName: string,
    protected _balance: number,
  ) {}
  addBalance(balance: number) {
    this._balance += balance;
  }
}

class StudentAccount extends BankAccount {
  test() {
    this._balance;
  }
}

const Neil = new BankAccount(12, "Neil", 600);
Neil.addBalance(100);
console.log(Neil);
