//map function
const nums=[1,5,8,9,2,7];

//find square of all ements in given array
const arr1=nums.map((n)=>{return n**2});
console.log(arr1);
console.log("--------");
//new ex
const prices =['$12.3','$56.3','$32.1','$23.2'];
console.log(parseInt('$12.3'.slice(1)));

const numPrices=prices.map((p)=>{return parseInt(p.slice(1))});
console.log((numPrices));
console.log("--------");
//filter function
const prices2= [23000,12000,5000,7800,100];

const budgetPrices=prices2.filter((p)=>{return p>2000 && p<10000});
console.log(budgetPrices);
console.log("--------");
//practice
const names= ['raju','chaman','kaliya','chotu'];
const check=names.filter((n)=>{ return  n.length>=5});
console.log(check);
console.log("--------");
//practice
const nums2 =[32,6754,2345,876,123,872];
const even=nums2.filter((a)=> {return a%2===0});
console.log(even);
//
console.log("--------");
const phoneList=[
    {brand:'Samsung', model:'m32', price:14999},
    {brand:'Oneplus',model:'m32', price:67999},
    {brand:'IQOO',model:'i32', price:18000},
    {brand:'Vivo' , model:'v7', price:34000},
 ];
 const checkPrice=phoneList.filter((phone)=>{return phone.price<20000});
 console.log(checkPrice);