function login(element){
    if (element.innerText == "Login"){
        element.innerText = "Logout"
    }
    else {
        element.innerText = "Login"
    }
}
function hideDefinitionButtton(element){
    element.remove()
}

function ninjaWasLiked(){
    alert("Ninja was liked")
}
