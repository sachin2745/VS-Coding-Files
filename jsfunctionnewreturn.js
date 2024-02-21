const getFact= (n) => {
    let f=1;
    for
        (let i=1;i<=n;i++){
    f=f*i;
}
return f;
}
getFact(5);

const myRes=getFact(10)/getFact(5);
console.log(myRes);