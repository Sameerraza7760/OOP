class BankAccount {
  constructor(balance) {
    this._balance = balance; // 👈 use _ as a convention for "private"
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
    }
  }

  getBalance() {
    return this._balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);

console.log(account.getBalance()); // 1300

const findSecondLargest = (arr) => {
  // easy way
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr[1];
};

const findSecondSmallest = (arr) => {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => a - b);
  return uniqueArr[1];
};

const reverseString = (str) => {
  return str.split("").revese().join("");
};
console.log(reverseString("hello"));

// olleh

const checkParindrome = (value) => {
  const reverseValue = value.split("").reverse().join("");
  return reverseValue === value;
};
console.log(checkParindrome("madam")); // true

// true

const findFactorial = (num) => {
  if (num === 0 || num === 1) return 1;
  return num * findFactorial(num - 1);
};

console.log(findFactorial(5)); // 120
console.log(findFactorial(0)); // 1

const findMax = (arr) => {
  console.log(Math.max(...arr));
};
fMa([1, 2, 3, 4, 5]); // 5
fMa([-10, -20, -30]); // -10

const removeDuplicate = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5])); // [1,2,3,4,5]
console.log(removeDuplicate(["a", "b", "a", "c"])); // ['a','b','c']

const addTwoArray = (arr, arr1) => {
  return arr.concat(arr1);
};

console.log(addTwoArray([1, 2, 3], [4, 5, 6])); // [1,2,3,4,5,6]

const arrFlat = (arr) => {
  return arr.flat(Infinity);
};
console.log(arrFlat([1, 2, [3, 4], [5, 6]])); // [1,2,3,4,5,6]
console.log(
  arrFlat([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); // [1,2,3,4,5,6]

// clousure

const changeCount = () => {
  let count = 0;

  function setCount(num) {
    count += num;
  }

  function getCount() {
    return count;
  }

  return { setCount, getCount };
};

const counter = changeCount();
counter.setCount(5);
counter.setCount(3);
console.log(counter.getCount()); // 8
// 8

const increaseBy = () => {
  let count = 0;
  return function () {
    count++;
    return count;
  };
};

const increment = increaseBy();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

const increase2 = increaseBy();
console.log(increase2()); // 1
console.log(increase2()); // 2

// because each call to increaseBy creates a new closure with its own count variable.

class userAge {
  constructor(age) {
    this._age = age;
  }

  setAge(newage) {
    if (newage > 0 && newage < 120) {
      this._age = newage;
    } else {
      console.log("Invalid age");
    }
  }
  getAge() {
    return this._age;
  }
}

const user = new userAge(20);
user.setAge(120);
console.log(user.getAge());

class StudentGrades {
  grade = [];
  constructor(newGrade) {
    this._grade = newGrade;
  }

  setGrade(newGrade) {
    if (newGrade >= 0 && newGrade <= 100) {
      this._grade.push(newGrade);
    } else {
      console.log("Invalid grade");
    }
  }
  getGrade() {
    return this._grade;
  }
}

const newStudent = new StudentGrades([90, 80, 70]);
newStudent.setGrade(110);
console.log(newStudent.getGrade());

// now make useState in react js

class State {
  constructor(initialValue) {
    this._value = initialValue;
  }
  setValue(newValue) {
    this._value = newValue;
  }
  getValue() {
    return this._value;
  }
}
const state = new State(0);
state.setValue(5);
console.log(state.getValue());

const decreaseBy = () => {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
};

const counter2 = decreaseBy();
console.log(counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.decrement()); // 1
console.log(counter2.getCount()); // 1

const user = {
  name: "John",
  age: 30,
  sellery: 5000,
};

console.log(Object.keys(user)); // ['name','age','sellery']
console.log(Object.values(user)); // ['John',30,5000]
console.log(Object.entries(user)); // [['name','John'],['age',30],['sellery',5000]]
console.log(Object.hasOwnProperty("name")); // true
console.log(Object.hasOwnProperty("address")); // false

// OOP in JavaScript

// Encapsulation
class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age; // Private-like variable (convention with _)
  }
  getAge() {
    return this._age; // Encapsulated access to _age
  }
  setAge(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    }
  }
}

const person = new Person("John", 25);
console.log(person.getAge()); // 25
person.setAge(30);
console.log(person.getAge()); // 30
// Encapsulation
// Encapsulation in JavaScript is about keeping data safe within
//  an object or class by restricting direct access and providing methods
// (getters and setters) to interact with that data.

// for example

console.log(person._age); // Direct access (not recommended)

//  if i accsess name

console.log(person.name); // Direct access (not recommended)

/////////////////////////////////////
// Abstraction

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  // Public method (abstracted detail)
  startCar() {
    this._igniteEngine(); // Abstracted engine ignition
    console.log("Car is starting...");
  }
  // Private method (hidden complexity)
  _igniteEngine() {
    console.log("Igniting engine...");
  }
}

const car = new Car("Tesla", "Model X");
car.startCar();
// Output:
// Igniting engine...
// Car is starting...

// Abstraction
// Abstraction in JavaScript is about simplifying complex systems
// by exposing only the necessary parts and hiding the intricate details.
// In the Car class, the user interacts with the startCar method
// without needing to understand the complexities of engine ignition.

const Counter = () => {
  let count = 0;

  const increase = () => {
    count++;
    return count;
  };
  const decreaseBy = () => {
    count--;
    return count;
  };

  return {
    increase,
    decreaseBy,
  };
};

const Count = Counter();

console.log(Count.increase());

const removeDuplicate = (arr) => {
  const uniqueArr = [...new Set(arr)];
  return uniqueArr;
};

console.log(removeDuplicate([1, 2, 3, 4, , 4, 5, 6]));

const findFactorial = (num) => {
  if (num === 1 || num === 0) {
    return 1;
  }

  return num * findFactorial(num - 1);
};

console.log(findFactorial(100));

const checkParindrome = (value) => {
  if (!value) return;
  const reverseValue = value.split("").reverse().join("");
  return value === reverseValue;
};

const giveSecondLargest = (arr) => {
  return arr.sort((a, b) => a - b)[1];
};

console.log(giveSecondLargest(arr));

const twoArrayConcat = (arr, arr2) => {
  return arr.concat(arr2);
};

const flatArray = (arr) => {
  return arr.flat(Infinity);
};

