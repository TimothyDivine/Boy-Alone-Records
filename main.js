let popup = document.getElementById("popup");
let login = document.getElementById("login")

function openPopup(){

    popup.classList.add("open-popup");
    login.classList.add("login");
}

function closePopup(){

    popup.classList.remove("open-popup");
}

let myResult = document.getElementById("result");
let myBtn = document.getElementById("myBtn");

function setUserName(){
  const userName = document.getElementById("myUserName").value;
  localStorage.setItem("name", userName);
  myResult.textContent = userName;

}

if (!localStorage.getItem("name")){
  setUserName();
}

else {
  const storedName = localStorage.getItem("name");
  myResult.textContent = storedName;
}

myBtn = document.getElementById("myBtn").onclick = () => {
  setUserName();
}



