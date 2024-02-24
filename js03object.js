const user={name:'Raju',email:'raju12@gmail.com',password:'raju123'};
console.log(user.email);
console.log(user.password);

console.log(user['password']);

//replace value
user.password='xyz123';
console.log(user);

//add value
user.address='Dholakpur';
console.log(user);

//delete value
delete user.address;

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log("------------");
//new example

const smartphone={
    brand:'Samsung',
    mode:'Galaxy m31',
    price:14999,
    color:['black','Blue','red'],
};
console.log(smartphone);
console.log(smartphone.color);
console.log(smartphone.color[1]);
console.log(smartphone.color.length);
smartphone.color[2]='white';
console.log(smartphone.color);

smartphone.color.splice(-1,1,'Grey');
console.log(smartphone.color);

smartphone.color.push('yellow');
console.log(smartphone.color);
console.log("------------");
//new ep

const myphone={
    brand:'OnePlus',
    model:'12 t',
    varient:{
        '8GB':47999,
        '12GB':56000
    }
};
console.log(myphone.varient);
console.log(myphone.varient['12GB']);
console.log("------------");
//Object into array

const phoneList=[
   {brand:'Samsung', model:'Galaxy m32', price:45000},
   {brand:'Oneplus',model:'m32', price:45000},
   {brand:'Infinix',model:'i32', price:45000},
   {brand:'Vivo' , model:'v7', price:45000},
];
console.log(phoneList.length);
//code to find price of second smartphone
console.log(phoneList[1].price);
//code to change model of last smartphone
phoneList[phoneList.length-1].model='V9';
console.log(phoneList);

//find sum of all prices
const sum = phoneList.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);
  
  console.log(sum);

//get models of all smartphones in an array
let modelArray = phoneList.map(obj => obj.model);

console.log(modelArray);