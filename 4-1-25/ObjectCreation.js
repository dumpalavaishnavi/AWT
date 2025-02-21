//1. Using object literal

const person = {
    name: "Bro",
    age: 30,
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };
  
  console.log(person.name); // Output: Alice
  console.log(person.age);  // Output: 30
  console.log("access using sqaure" + person["name"] + person["age"])
  person.greet();           // Output: Hello, Alice
  
//2. using new keyword
const person1 = new Object();
person.name1 = "abbela";
person.age1 = 25;
person.greet1 = function() {
  console.log("Hello, " + this.name);
};

console.log(person.name1); // Output: Bob
console.log(person.age1);  // Output: 25
person.greet1();           // Output: Hello, Bob

//3.using constructor
function Person(name2, age2) {
    this.name2 = name2;
    this.age2 = age2;
    this.greet2 = function() {
      console.log("Hello, " + this.name2);
    };
  }
  
  const p1 = new Person("Charlie", 35);
  const p2 = new Person("David", 28);
  
  console.log(p1.name2);  // Output: Charlie
  console.log(p2.age2);   // Output: 28
  p1.greet2();            // Output: Hello, Charlie
  p2.greet2();            // Output: Hello, David
  