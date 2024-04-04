function updateName(){
    const uName = prompt("Enter your name: ");
    if (uName.trim()){
        userName.textContent=`${uName}`;
    }
    else {
        userName.textContent="Invalid"
    };
    
};

const userName = document.querySelector('h1#un');

userName.addEventListener("click",updateName);
