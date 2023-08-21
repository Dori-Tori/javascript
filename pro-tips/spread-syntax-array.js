// Spread Syntax - Array
let fruits = ['수박', '사과', '바나나'];

// fruits.push('딸기');
fruits = [...fruits, '딸기'];

// fruits.unshift('포도');
fruits = ['포도', ...fruits];

const fruits2 = ['멜론', '복숭아', '파인애플'];
let combined = fruits.concat(fruits2);
combined = [...fruits, '체리', ...fruits2];