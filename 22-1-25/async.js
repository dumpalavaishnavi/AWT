async function add(a,b){
    return a+b
}
//console.log(add(10,20)) --> here async returns a promise i.e as 'Promise { 30 }' 
// so it should be handled using then as regular
add(1,2).then(result=>console.log(result))