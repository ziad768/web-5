let password = document.getElementById("exampleInputPassword1")
let show = document.getElementById("exampleCheck1")

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

let sell                = document.querySelectorAll("#sell")
let alertCart           = document.getElementById("alert")
let divItems            = document.querySelector(".items-cart")
let tableCart           = document.querySelector(".cart")
let containerTotalPrice = document.getElementById("total")
let totalPrice          = 0
sell.forEach((ele ) => {
    ele.onclick = () =>{
        alertCart.style.display = "block"
        setTimeout(() => alertCart.style.display = "none" , 2000)
        //////////////////////////////////////////////////////////
        let price = +ele.getAttribute("price")
        totalPrice += price
        //////////////////////////////////////////////////////////
        tableCart.style.display = "block"
        //////////////////////////////////////////////////////////
        containerTotalPrice.innerHTML = totalPrice.toFixed(2)
        //////////////////////////////////////////////////////////
        let div = document.createElement("div")
        div.innerHTML = `<div class="d-flex justify-content-between">

             <div class="d-flex  gap-2 p-3" style="width: 25rem;">

             <div class="card-body " style = " margin-top:80px">
             <p class="card-text text-danger"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></p>
             </div>
             </div>
             <div class="text-end"><h2 class="fs-1" style="line-height:220px">$${price}</h2></div>
             </div>`
             let img = ele.parentElement.previousElementSibling.cloneNode()
             img.classList = ""
             img.style.width = "200px"
             img.style.height = "200px"
            div.children[0].children[0].children[0].before(img)
            let nameItem = ele.parentElement.children[0].cloneNode()
            nameItem.innerHTML = ele.parentElement.children[0].innerHTML
            div.children[0].children[0].children[1].children[0].before( nameItem)
            divItems.append(div)
    }
})
