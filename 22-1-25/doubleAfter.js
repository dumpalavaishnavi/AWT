// Question - take a number as input every second, double it and sum all the numbers
function doubleAfterEverySecond(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(n*2);
    },1000);
});
}
async function sum() {
    let a = await doubleAfterEverySecond(10);
    let b = await doubleAfterEverySecond(20);
    let c = await doubleAfterEverySecond(30);
    console.log(a+b+c)
}
sum()