function fetchUserData(userID){
    return new Promise((resolve,reject)=>{
        console.log(`Fetching user details for user ID : ${userID}`);
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

fetchUserData(1900)
.then(user=>fetchUserSettings(user.type))
.then(details=>console.log(details))
.catch(error=>console.log(error))