


var btn1 = document.querySelectorAll(".card #btn1")
var content = document.querySelector(".content-cart")
var outPrice = document.querySelector("#Total")
var listCart = document.querySelector("#list-cart")
var total = document.querySelector("#btn-total")
var totalPrice = 0
btn1.forEach(function (item) {
    item.onclick = function () {
        content.innerHTML  += "<li>"+ item.getAttribute("name")  +"</li>"
        totalPrice += +(item.getAttribute("price"))
        if(content != "" ){
            listCart.style.display = "block"
        }
    }
});
total.onclick = function (){
    outPrice.innerHTML = totalPrice 
}

