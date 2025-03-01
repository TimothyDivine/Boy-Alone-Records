let popup = document.getElementById("popup");
let login = document.getElementById("login")

function openPopup(){

    popup.classList.add("open-popup");
    login.classList.add("login");
}

function closePopup(){

    popup.classList.remove("open-popup");
}