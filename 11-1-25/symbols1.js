const sym1 = Symbol('id');
const sym2 = Symbol('id');

console.log(sym1 === sym2); 
const user = {
    name: "ABC",
    [sym1]: 12345
};

console.log(user.name);    
console.log(user[sym1]);   
