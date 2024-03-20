var myUser=document.querySelector('h1#left');
function setUserName(){
    const user=prompt("Enter your name:");
    localStorage.setItem("name",user);
    myUser.textContent=user
};

if (localStorage.getItem("name")){
    myUser.textContent=localStorage.getItem("name")
}

myUser.onclick=()=>{
    setUserName()
}

