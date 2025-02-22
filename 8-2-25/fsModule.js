var fs = require('fs')

fs.writeFile("demo.txt","Good Bye",(err,data)=>{
    console.log("Data written succesfully");
});

fs.readFile("demo.txt","UTF-8",(err,data)=>{
    console.log(data);
})