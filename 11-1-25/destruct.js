//object destructuring

const Person={
    name : "John",
    age : 19,
    MNumber : 9007482
};

const{name : nm , age : a , MNumber : no} = Person;
console.log(nm);
console.log(a);
console.log(no);


