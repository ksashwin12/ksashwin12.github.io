let myUser=document.querySelector('h1#left');
myUser.textContent="Guest";
myUser.onclick=()=>{
    let a=prompt("Type your name:");
    if (a){
        myUser.textContent=a;
    }
};
