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















class userAge {
    constructor(age) {
        this._age = age
    }

    setAge(newage) {
        if (newage > 0 && newage < 120) {
            this._age = newage
        }
        else {
            console.log("Invalid age")
        }

    }
    getAge() {
        return this._age
    }
}

const user = new userAge(20)
user.setAge(120)
console.log(user.getAge())


class StudentGrades {
    grade = []
    constructor(newGrade) {
        this._grade = newGrade
    }

    setGrade(newGrade) {
        if (newGrade >= 0 && newGrade <= 100) {
            this._grade.push(newGrade)
        }
        else {
            console.log("Invalid grade")
        }
    }
    getGrade() {
        return this._grade
    }
}

const newStudent = new StudentGrades([90, 80, 70])
newStudent.setGrade(110)
console.log(newStudent.getGrade())


// now make useState in react js



class State {
    constructor(initialValue) {
        this._value = initialValue
    }
    setValue(newValue) {
        this._value = newValue
    }
    getValue() {
        return this._value
    }

}
const state = new State(0)
state.setValue(5)
console.log(state.getValue())
















