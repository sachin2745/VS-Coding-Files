const arr1=[7653,3245.45,'hello',true,null];
console.log(arr1);

const fruits=['apple','mango','graphs','kiwi','orange'];
//indexing
//also work with string
console.log( fruits[3]);
console.log( fruits[1]);
console.log( fruits.indexOf('orange'));
console.log( fruits.at(-2));
console.log( fruits.length);

//slicing

console.log(fruits.slice(1,3));
console.log(fruits.slice(1,6));
console.log(fruits.slice(0));

price= '89347.43';
console.log(price.slice(1));

//adding elements

fruits.push('banana');//adds element at the end
fruits.unshift('papaya');//adds element at the beginging

console.log(fruits);

//removiing elements
fruits.pop();//remove element from the end
fruits.shift();//remove element from the beginning
console.log(fruits);