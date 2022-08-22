
const form = document.getElementById("form")
const select = document.getElementById("select")
const input = document.getElementById("input")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    if (input.value === '') {
        alert("Please enter name")
    } else if (select.value === '') {
        alert("Please select country")
    } else {
        form.submit()
        // form.reset()
    }
})





// input.addEventListener("keydown", function(e) {
//     // console.log(this.value)
//     // console.log(e.keyCode)
//     // console.log(e.key)
// })

// input.addEventListener("keyup", function(e) {
//     // console.log(this.value)
//     // console.log(e.keyCode)
//     console.log(e.key)
// })


const box = document.getElementById("box")


// box.addEventListener("mousedown", function(e) {
//     box.style.backgroundColor ="red"
// })
// box.addEventListener("mouseup", function(e) {
//     box.style.backgroundColor ="green"
// })
// box.addEventListener("mouseenter", function(e) {
//     box.style.backgroundColor ="yellow"
// })
// box.addEventListener("mouseleave", function(e) {
//     box.style.backgroundColor ="orange"
// })
// box.addEventListener("mouseover", function(e) {
//     box.style.backgroundColor ="yellow"
// })
// box.addEventListener("mouseout", function(e) {
//     box.style.backgroundColor ="orange"
// })
// box.addEventListener("mousemove", function(e) {
//     box.style.backgroundColor ="purple"
// })



// box.addEventListener("mousewheel", function(e) {
//     box.style.backgroundColor ="black"
// })


// document.getElementsByTagName("body")[0].ononline = function() {
//     alert("Online")
// }


// document.getElementsByTagName("body")[0].onoffline = function() {
//     alert("Offline")
// }


// document.getElementsByTagName("body")[0].onresize = function() {
//     console.log("resizing window")
// }

// document.getElementsByTagName("body")[0].onscroll = function(e) {

//     console.log(e);
// }
// document.getElementsByTagName("body")[0].onwheel = function(e) {

//     console.log(e);
// }




const btn = document.createElement("button")
btn.innerHTML = "Click"
document.body.appendChild(btn)


btn.addEventListener("click", function (e) {
    // box.classList.add("box3")
    // box.classList.toggle("box3")
    // box.classList.remove("box")
    // console.log(box.classList)


    // if (box.classList.contains("box3")) {
    //     console.log("Yes")
    // } else {
    //     console.log("No")

    // }


    box.setAttribute("style","background:red;width:200px;height:200px")        


    // console.log(box.getAttribute("style"))

    // console.log(box.hasAttribute("id"))


})





document.documentElement.addEventListener("mousemove",function(event){
    console.log(event.clientX, event.clientY)
    box.style.left = event.clientX-20+"px";
    box.style.top = event.clientY-20+"px";
})

