var myUser=document.querySelector('h1#left');
function setUserName(){
    var user=prompt("Enter your name:");
    if (!user){
        setUserName();
    };
    // while (!user){
    //     user=prompt("Enter a valid name:")
    // } Another method in case the first doesn't work.
    localStorage.setItem("name",user);
    myUser.textContent=user;
};

if (localStorage.getItem("name")){
    myUser.textContent=localStorage.getItem("name");
};

myUser.onclick=()=>{
    setUserName();
};

