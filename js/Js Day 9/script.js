const list1 = document.getElementsByTagName("ul")

// console.log(list1[0].childNodes)
// console.log(list1[0].children)
// console.log(list1[0].lastChild)
// console.log(list1[0].nextSibling)


// const box1 = document.querySelector('#box1');
// const box2 = document.querySelector('#box2');
// const p = document.querySelector('p');

// box2.style.background="#ff3"

// function func(){
//     // box2.remove()
//     // box2.removeChild(p);
//     // box2.replaceChild(p,box2.lastChild);
    
//     const span = document.createElement('span')
//     span.innerText = "This is span text"
//     span.style.color="green"
//     // box2.insertAdjacentElement('beforebegin',span);
//     // box2.insertAdjacentElement('afterbegin',span);
//     // box2.insertAdjacentElement('beforeend',span);
//     box2.insertAdjacentElement('afterend',span);

// }

// console.log(box1.previousSibling.previousSibling)
// console.log(box1.nextSibling.nextSibling)

// console.log(p.parentElement)
// console.log(p.parentNode)







const box = document.querySelector('.box')
const p = document.querySelector('.box p')
const btn = document.querySelector('#btn')

// console.log(box.scrollWidth)
// console.log(box.scrollHeight)

btn.addEventListener("click",function(e){
    
    // box.scrollTop = 170
    // console.log(box.scrollTop)
    // box.scrollLeft = 120
    // console.log(box.scrollLeft)

    // p.scrollIntoView()
    // console.log(e.clientX)
    // console.log(e.clientY)
})


// document.documentElement.addEventListener("mousemove", function(e) {
//     console.log(e.clientX, e.clientY)
//     const span = document.createElement("span")
//     span.style.width ="30px"
//     span.style.height ="30px"
//     span.style.background="green"
//     span.style.borderRadius="50%"
//     span.style.position="absolute"
//     span.style.left=e.clientX+"px"
//     span.style.top=e.clientY+"px"
//     document.body.appendChild(span)

//     setTimeout(() => {
//         span.remove()
//     }, 3000);

// })

// console.log(box.offsetHeight)
// console.log(box.offsetWidth)
// console.log(box.offsetLeft)
// console.log(box.offsetTop)
// console.log(box.clientWidth)
// console.log(box.clientTop)
// console.log(box.clientLeft)
// console.log(document.documentElement.clientX)
// console.log(document.documentElement.clientY)




// console.log(window.innerHeight)
// console.log(window.innerWidth)
// console.log(window.outerWidth)
// console.log(window.outerHeight)
// console.log(window.screenLeft)
// console.log(window.screenTop)
// console.log(window.scrollX)
console.log(window.scrollY)