/**
 * Optional Chaining(ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
{
    const person1 = {
        name: 'Ellie',
        job:{
            title: 'S/W Engineer',
            manager:{
                name: 'Bob',
            },
        },
    };
    const person2 = {
        name: 'Bob',
    };

    // BadBadBadBad
    {
        function printManager(person){
            console.log(person.job.manager.name);
        }
        printManager(person1);
        // printManager(person2);
    }

    // BadBadBad
    {
        function printManager(person){
            console.log(
                person.job
                    ? person.job.manager
                        ? person.job.manager.name
                        : undefined
                    : undefined
            );
        }
        printManager(person1);
        printManager(person2);
    }

    // Bad
    {
        function printManager(person){
            console.log(person.job && person.job.manager && person.job.manager)
        }
        printManager(person1);
        printManager(person2);
    }

    // Good
    {
        function printManager(person){
            console.log(person.job?.manager?.name);
        }
        printManager(person1);
        printManager(person2);
    }
}

/**
 * Nullish Coalescing Operator (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 */
{
    // Logical OR operator
    // false: fasle, '', 0 , null, undefined
    {
        const name = 'Ellie';
        const userName = name || 'Guest';
        console.log(userName);
    }

    {
        const name = null;
        const userName = name || 'Guest';
        console.log(userName);
    }

    // Bad
    {
        const name = '';
        const userName = name || 'Guest';
        console.log(userName);

        const num = 0;
        const message = num || 'undefined';
        console.log(message);
    }

    // Good
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message);
    }
}