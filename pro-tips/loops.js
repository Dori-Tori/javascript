// Looping
const items = [1,2,3,4,5,6];

// Bad Code
function getAllEvens(items){
    const result = [];
    for(let i = 0;i < items.length; i++){
        if(items[i] % 2 === 0){
            result.push(items[i]);
        }
    }
    return result;
}

function multplyByFour(items){
    const result = [];
    for(let i = 0 ; i < items.length; i++){
        result.push(items[i] * 4);
    }
    return result;
}

function sumArray(items){
    let sum = 0;
    for(let i = 0; i < items.length ; i++){
        sum += items[i];
    }
    return sum;
}

const evens1 = getAllEvens(items);
const multply1 = multplyByFour(evens1);
const sum1 = sumArray(multply1);
console.log(sum1);

// Good Code
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a,b) => a + b, 0);
console.log(sum);

// Good Code
const result = items
    .filter((num) => num % 2 === 0)
    .map((num) => num * 4)
    .reduce((a, b) => a + b, 0);
console.log(result);