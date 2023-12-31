'use strict';

// Promis is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promis is created. the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise.then(value => {
    console.log(value);
}).catch(value => {
    console.error(value);
}).finally(() => {
    console.log('finally');
});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve , reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
let getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });
let getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`${hen} => 계란`)), 1000);
    });
let cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 후라이`), 1000);
    });

getHen()
    .then(getEgg)
    .catch(error => {
        return '빵';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);

