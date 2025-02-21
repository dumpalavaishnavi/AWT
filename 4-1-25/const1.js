//const variables are scoped to the block in which they are declared.
//Once a const variable is assigned a value, it cannot be re-assigned or updated.

//console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;
console.log(z); // 30

const a = 10;
console.log(a);  // Output: 10

// a = 20;  // TypeError: Assignment to constant variable.

const globalVar = "I am a global variable";// once declared it can be accessed throughout the code, i.e is global scope
console.log(globalVar);  // Output: "I am a global variable"

function test() {
  console.log(globalVar);  // Accessible inside the function as well
}

test();  // Output: "I am a global variable"

{
    const blockVar = "I am inside a block";
    console.log(blockVar);  // Output: "I am inside a block"
  }
  
//console.log(blockVar);  // ReferenceError: blockVar is not defined , if a const variable is declared inside a block or fn' can't accessed outside as it is fn or block scope

function myFunction() {
    const funcVar = "I am function-scoped";
    console.log(funcVar);  // Output: "I am function-scoped"
  }
  
  myFunction();
  
//console.log(funcVar);  // ReferenceError: funcVar is not defined
for (const i = 0; i < 3; i++) {
    console.log(i);  // Output: 0, 1, 2
  }
  
//console.log(i);  // ReferenceError: i is not defined
  