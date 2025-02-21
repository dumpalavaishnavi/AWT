function outer(name){
    var msg = "Welcome";

    function inner(){
        console.log(`${msg} to ${name}`);
    }
    return inner;
}
let in1 = outer('CVR');
in1();