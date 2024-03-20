var myUser=document.querySelector('h1#left');
function setUserName(){
    var user=prompt("Enter your name:");
    while (!user){
        user=prompt("Enter a valid name:")
    }
    localStorage.setItem("name",user);
    myUser.textContent=user
};

if (localStorage.getItem("name")){
    myUser.textContent=localStorage.getItem("name")
}

myUser.onclick=()=>{
    setUserName()
}

