// console.log(document.images[0].attributes.alt);


// console.log(document.forms);
// console.log(document.links);
// console.log(document.baseURI);
// console.log(document.URL);



// const heading1 = document.getElementById("heading")
// const heading2 = document.getElementById("heading2")

// console.log(heading2)



// const bytag = document.getElementsByTagName("h1")

// console.log(bytag)



// const bytag = document.getElementsByClassName("heading")

// console.log(bytag)





// const bytag = document.querySelector("h1")
// const bytag = document.querySelector(".heading")
// const bytag = document.querySelector("#heading")
// const bytag = document.querySelector("#heading")


// const bytag = document.querySelector(".container p")

// const bytag = document.querySelector(".container")
//         const paras = bytag.querySelectorAll("p")



const bytag = document.querySelector("#heading")

// bytag.innerText = "<span>New text</span>"
// bytag.innerHTML = "<span>New text</span>"


// bytag.forEach(element=>{
//     console.log(element.innerText)

// })

// bytag.forEach(element=>{
//     console.log(element.innerHTML)
// })




const img = document.getElementsByTagName("img");

// console.log(typeof img)

let images = Array.from(img)

images.forEach(image => {
    image.src = "https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg"

    // image.width="200"
    // image.height="200"
    // image.className="img"
})






// const image = document.createElement("img")

// image.src = "https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg"

// image.className = "image__profile"
// image.width = "200"
// image.height = "200"
// image.alt = "Profile Image"


// document.body.prepend(image)
// document.body.prepend(image)

// const image2 = document.createElement("img")

// image2.src = "https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg"

// image2.className = "image2__profile"
// image2.width = "200"
// image2.height = "200"
// image2.alt = "Profile Image"

// document.body.prepend(image2)

// console.log(image)




// const heading = document.createElement("h1")
// const text = document.createTextNode("Hello this is text")

// heading.appendChild(text)

// document.body.appendChild(heading)


// document.body.style.backgroundColor = "#222"
// document.body.style.display = "flex"
// document.body.style.flexWrap = "wrap"

// for(let i = 0; i <=100;i++){
//     let span = document.createElement("span")
//     span.className="box"

//     span.style.width = "50px"
//     span.style.height = "50px"
//     span.style.backgroundColor = "green"
//     span.style.margin = "10px"
//     span.style.zIndex = "10"

//     document.body.prepend(span)
// }


// function printMsg(btn){
//     btn.innerText = "Hello"
//     console.log(btn.innerHTML)
// }


let btn = document.getElementById("btn")

// btn.onclick = () =>{
//     console.log("Clicked")
// }


// btn.addEventListener("click", function () {
//     setTimeout(() => {
//         const image = document.createElement("img")

//         image.src = "https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg"

//         image.className = "image__profile"
//         image.width = "200"
//         image.height = "200"
//         image.alt = "Profile Image"


//         document.body.prepend(image)
//     }, 3000)
// })



// btn.addEventListener("click", function(event){
//     // console.log(event)
//     console.log(this)
// })
document.body.height = "100vh"

let arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
btn.addEventListener("click", ()=>{
    var clr = '#'
    for(let i=0;i<6;i++){
        clr+=arr[Math.floor(Math.random()*arr.length)]
    }
    console.log(clr)
    
    document.body.style.background = clr
})




// btn.addEventListener("contextmenu", ()=>{
//     // console.log(event)
//     return false;
//     console.log("Right btn clicked")
// })


// btn.addEventListener("dblclick", ()=>{
//     // console.log(event)
//     console.log("dbl clicked")
//     // return false;
// })




// let input = document.getElementById("input")
// let title = document.getElementById("title")



// input.addEventListener("blur", function(){
// //    console.log("blur event")
// //    console.log(this.value)
//    console.log(input.value)
// })


// input.addEventListener("focus", function(){
// //    console.log("blur event")
// //    console.log(this.value)
//     this.value = "Hello"
//    console.log(this.value)
// })


// input.addEventListener("input", function(){
//     title.innerHTML = this.value
//    console.log(this.value)
// })


// const select = document.getElementById("select")
// select.addEventListener("change", function(){
//     title.innerHTML = this.value
//    console.log(this.value)
// })



// const select = document.getElementById("select")
// select.addEventListener("change", function(){
//     title.innerHTML = this.value
//    console.log(this.value)
// })

