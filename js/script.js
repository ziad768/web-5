let left  = document.getElementById("info-left")
let right = document.getElementById("info-right")
function home() {
    left.style.transform = "translateX(0)"
    right.style.transform = "translateX(0)"
    left.style.opacity = "1"
    right.style.opacity = "1"
}
setTimeout(home , 500)