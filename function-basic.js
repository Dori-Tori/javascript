// Don't give up
// 포기하지 마세요

// 함수 선업
function doSomething(add){
    console.log(add);
}

function add(a,b){
    const sum = a + b;
    return sum;
}

// 함수 호출
doSomething(add);

const addFun = add;
console.log(add);
addFun(1,2);
