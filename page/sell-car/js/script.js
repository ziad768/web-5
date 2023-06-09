let password = document.getElementById("exampleInputPassword1")
let show = document.getElementById("flexSwitchCheckDefault")

function showPassword(){
    var type = password.getAttribute("type")
    if(type === "password"){
        password.setAttribute("type" , "text")
    }
    if(type === "text"){
        password.setAttribute("type" , "password")
    }
}
show.onclick = showPassword
