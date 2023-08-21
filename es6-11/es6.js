/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 * 
 */
{
    const ellie1 = {
        name: 'Ellie',
        age: '18',
    };

    const name = 'Ellie';
    const age = '18';

    // Bad
    const ellie2 = {
        name: name,
        age: age,
    };

    // Good
    const ellie3 = {
        name,
        age,
    };

    console.log(ellie1,ellie2,ellie3);

}

/**
 * Destructuring Assignment
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * 
 */
{
    // object
    const student = {
        name: 'Anna',
        level: 1,
    };

    // Bad
    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    // Good
    {
        const { name, level } = student;
        console.log(name, level);

        const { name: studentName , level: studentLevel } = student;
        console.log(studentName, studentLevel);
    }

    // array
    const animals = ['강아지', '고양이'];

    // Bad
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    // Good
    {
        const [first , second] = animals;
        console.log(first, second);
    }
}

/**
 * Spread Syntax
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
{
    const obj1 = {key: 'key1'};
    const obj2 = {key: 'key2'};
    const array = [obj1,obj2];

    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, {key: 'key3'}];
    obj1.key = 'newKey';
    console.log(array,arrayCopy,arrayCopy2);

    // object copy
    const obj3 = { ...obj1 };
    console.log(obj3);

    // array concateation
    const fruits1 = ['복숭아','딸기'];
    const fruits2 = ['바나나','키워'];
    const fruits = [...fruits1 , ...fruits2];
    console.log(fruits);

    // object merge
    const dog1 = { dog: '진도개'};
    const dog2 = { dog: '바둑이'};
    const dog = { ...dog1 , ...dog2};
    console.log(dog);
}

/**
 * Default parameters
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
{
    // Bad
    {
        function printMessage(message){
            if(message == null){
                message = 'default message';
            }
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }

    // Good
    {
        function printMessage(message = 'default message'){
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }
}

/**
 * Ternary Operator
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

{
    const isCat = true;
    //Bad
    {
        let component;
        if(isCat){
            component = '고양이';
        }else{
            component = '강아지'; 
        }
        console.log(component);
    }

    //Good
    {
        let component = isCat ? '고양이' : '강아지';
        console.log(component);
    }
}

/**
 * Template Literals
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
 */
{
    const weather = '맑음';
    const temparature = '16℃';

    //Bad
    console.log('Today weather is ' + weather + ' and temparature is ' + temparature + '.');

    //Good
    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
}