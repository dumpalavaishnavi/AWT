let a = 10;
console.log(a)
//let a= 5;
//console.log(a); // can't redecalred in the samne scope
//here we can update the value of a as a = 10 and 

let b; // here declaration is done and initialised isn't so undefined
console.log(b);
b=10670;
console.log(b);

//console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // 20


let globalVar = "I am a global variable";//variable declared outside any fn/block using let comes under global scope
console.log(globalVar);  // Output: "I am a global variable"

function test() {
  console.log(globalVar);  // Accessible in functions as well
}

test();  // Output: "I am a global variable"

{
    let blockVar = "I am inside a block";
    console.log(blockVar);  // Output: "I am inside a block"
  }
  
  //console.log(blockVar);  // ReferenceError: blockVar is not defined as let is block scope and here the blockVar is not declared anywhere in the
  
let d = 78;
{
    let d = 238;
    console.log(d);
}
//console.log(d); can be accessed here as d is declared above the block , same in case of function


function myFunction() {
    let funcVar = "I am function-scoped";
    console.log(funcVar);  // Output: "I am function-scoped"
  }
  
  myFunction();
  
  //console.log(funcVar);  // ReferenceError: funcVar is not defined , as it is not declared 
  
  for (let i = 0; i < 3; i++) {
    console.log(i);  // Output: 0, 1, 2
  }
  
  //console.log(i);  // ReferenceError: i is not defined
  
  if (true) {
    let conditionVar = "I am inside a conditional block";
    console.log(conditionVar);  // Output: "I am inside a conditional block"
  }
  
  //console.log(conditionVar);  // ReferenceError: conditionVar is not defined
  