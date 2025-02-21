var a = 10;
console.log(a)
var a= 5;
console.log(a);
var b;
console.log(b);


var d =7;
{
    console.log(d);
    var d = 89;
    console.log(d);
}
console.log(d);

function myFunction() {
    var funcVar = "I am function-scoped";
    console.log(funcVar); // Accessible inside the function
  }
  
  myFunction(); // Output: "I am function-scoped"
  //console.log(funcVar); // ReferenceError: funcVar is not defined (it's not accessible outside)
  console.log(myFunction());
  
  if (true) {
    var blockVar = "I am accessible outside this block";
    console.log(blockVar); // Accessible inside the block
  }
  
  console.log(blockVar); // Output: "I am accessible outside this block"
  
  for(var i=0;i<=7;i++){
    console.log(i);
  }