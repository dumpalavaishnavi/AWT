function userData(){
    return new Promise((resolve,reject)=>{
        resolve({userID : 1 , name : 'ABC'})
    });
}
userData()
.then(data=>console.log(data))
.catch(error=>console.log(error))