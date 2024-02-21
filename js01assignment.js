// prime number check

let n = 20;
let prime = true;

for (let i = 2; i < n / 2; i++) {
    if (n % i === 0) {
        console.log('not prime');
        prime = false;
        break;
    }
}
if (prime) {
    console.log('prime');
}

console.log("----------");
// wap to print prime no in range of 100 to 600
const checkPrime = (n) => {

    for (let i = 2; i < n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

for(let i=100; i<=600; i++){
    if( checkPrime(i) ){
        console.log(i);
    }
}

console.log("----------");
//fabonacci series 0,1,1,2,3,5,8,13...
let [a, b] = [0, 1];
let c = a+b;
console.log(a);
console.log(b);
while(c <= 100){
    console.log(c);
    [a, b] = [b, c];
    c = a+b;
}

console.log("----------");
// reverse a number

let num = 456767;
let reverse = 0;

while(num > 0){
    let d = num % 10;
    reverse = reverse * 10 + d;
    num = parseInt(num/10);
}

console.log(reverse);

console.log("----------");
//area of triangle

function triangleArea(base,height){
    return 0.5*base*height;
}
let area=triangleArea(10,5);
console.log(area);