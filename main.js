
function saveToLocalStorage(event){
    const name=event.target.username.value
    const email= event.target.email.value
    const phonenumber= event.target.phonenumber.value
    let obj={
        name,email,phonenumber
    } 
    localStorage.setItem(obj.email,JSON.stringify(obj))  
    
    showNewUserOnScreen(obj)
}
function showNewUserOnScreen(user){
    
    event.preventDefault()
    const parentNode =  document.getElementById("listOfUsers")
    const childHTML = `<li id=${user.email}>${user.name} - ${user.email} 
        <button onclick=deleteUser('${user.email}')>DeleteUser </button>
        <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}')> Edit User </button>
        </li> `
    parentNode.innerHTML= parentNode.innerHTML + childHTML
 }

//edit 
function editUserDetails(emailId,username,phonenumber){
    document.getElementById('email').value = emailId;
    document.getElementById('username').value = name;
    document.getElementById('phonenumber').value =phonenumber;
    deleteUser(emailId)
}

//delete
function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId)
    removeUserFromScreen(emailId)
}
function removeUserFromScreen(emailId){
    const parentNode=document.getElementById("listOfUsers")
    const childNodeToBeDeleted=document.getElementById(emailId)
    parentNode.removeChild(childNodeToBeDeleted); 
}


