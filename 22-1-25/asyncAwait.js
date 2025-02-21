function fetchUserData(userID){
    return new Promise((resolve,reject)=>{
        console.log(`Fetching user details for user ID : ${userID}`)
        resolve({id : 'UserID' , name : 'ABC' , type : 'gold'})
        //here the reject is not highlighted as there is no reject statement when failed to return
    });
}
function fetchUserSettings(userType){
    return new Promise((resolve,reject)=>{
        console.log(`Fetching details for user type : ${userType}`);
        const settings = userType == 'gold'
        ? {theme : 'Dark' , notifications : 'true'}
        : {theme : 'Light' , notifications : 'false'}
        resolve(settings)
        //here the reject is not highlighted as there is no reject statement when failed to return
    });
}

async function display() {
    let user = await fetchUserData(1);  // Pauses here until fetchUserData resolves
    let settings = await fetchUserSettings(user.type);  // Pauses here until fetchUserSettings resolves
    console.log(settings);  // Runs after both promises are resolved
}
display();

// as the function is an async fn as marked so the lines are executed parallely
//but this are chained promises so the output of previous is used by the next promise
// to solve this we use await which helps to pause the execution for promise decision 
/*The await keyword is used inside an async function to pause the execution of the function and wait for the Promise to resolve or reject.
It can only be used inside an async function.
The await keyword makes the code look synchronous, but it does not block the entire program. It only blocks the execution of the function in which it is used.
*/