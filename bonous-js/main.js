// number, string, boolean, null, undefined, symbol
let number = 2;
let num = '2';

// object
let obj = {
    name: 'ellie',
    age: 5
};
console.log(obj.name);

// function
function add(a,b){
    return a + b;
}

function divide(a,b){
    return a / b;
}

function print(name , age){
    console.log(`${name} ${age}`);
}

function surpries(operator){
    const result = operator(2,3);   //add(2,3)
    console.log(result);
}

surpries(divide);

print(8,33);

const sum = add(3,4);
console.log(sum);

const doSomething = add;

const result = doSomething(2,3);
console.log(result);

const result2 = add(2,3);
console.log(result2);

// false: 0, -0, '', null, undefined
// true: -1, 'hello', 'false'
let num1; // undefined
let obj1; // undefined

obj1 && console.log(obj1.name);

// class
class Counter{
    constructor(runEverFiveTimes){      //생성자
        this.counter = 0;
        this.callback = runEverFiveTimes;
    }

    increase(runIf5Times){
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0){
            this.callback && this.callback(this.counter);
        }
    }
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

function printSomething(num){
    console.log(`yo! ${num}`);
}
function alertNum(num){
    alert(`yo! ${num}`);
}

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();

alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();