// Nullish coalescing operator for null , undefined
// Logical OR operator for falsy
// Bad Code
function printMessage(text) {
    let message = text;
    if(text == null || text == undefined){
        message = 'Nothing to display';
    }
    console.log(message);
}

// Good Code
function printMessage(text) {
    const message = text ?? 'Nothing to display';
    console.log(message);
}

// Default parameter is only for undefined
function printMessage(text = 'Nothing to display'){
    console.log(text);
}

printMessage('Hello');
printMessage(undefined);
printMessage(null);
printMessage();
printMessage('');

const result = getInitialState() ?? fetchFromServer();
console.log(result);

function getInitialState(){
    return null;
}
function fetchFromServer(){
    return 'Hiya from';
}