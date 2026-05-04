class Counter {
  static count: number = 0;

  static increment() {
    return (Counter.count += 1);
  }

  static decrement() {
    return (Counter.count -= 1);
  }

  static reset() {
    return (Counter.count = 0);
  }
}

// const instance1 = new Counter();
// const instance2 = new Counter();
// const instance3 = new Counter();
// instance1.increment();
// instance2.increment();
// instance3.increment();
// console.log("in1", instance1.increment());
// console.log("in1", instance1.increment());
// console.log("in2", instance2.increment());
// console.log("in3", instance3.increment());

console.log(Counter.increment());
