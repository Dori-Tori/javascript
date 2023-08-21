// Spread Syntax - Object
const item = { type: '티', size: 'M'};
const detail = { price: 20, made: 'Korea', gender: 'M'};

// Bad Code
item['price'] = detail.price;

// Bad Code
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;

// Bad Code
const newObject2 = {
    type: item.type,
    size: item.size,
    price: detail.price,
    made: detail.made,
    gender: detail.gender,
};

// Good Code
const shirt0 = Object.assign(item, detail);

// Better! Code
const shirt = {...item, ...detail};