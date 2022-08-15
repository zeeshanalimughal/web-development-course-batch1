const arr = [
    [1,2,3,4,5,6,7,8,9,10,11,12,13],
    ["A","B","C","D","E","F","G","H","I"],
    [true,true,true,false,false]
]

// arr[0][arr[0].length] = 437

// console.log(arr[0][0])

// for(let i = 0; i < arr[0].length; i++){
//     console.log(arr[0][i])
// }
// for(let i = 0; i < arr[1].length; i++){
//     console.log(arr[1][i])
// }
// for(let i = 0; i < arr[2].length; i++){
//     console.log(arr[2][i])
// }


// console.log(arr[1])
// console.log(arr[2])

// const numbers = [34]

// numbers[0] = 2
// numbers[1] = 4
// numbers[10] = 46

// const arr2 = new Array(34)
// arr2[20] = 374

// console.log(arr2)






//Array Functions





const scores = [23,45,67,55,87,99,76,12,65,45];
// document.write(scores.concat([44,5,6,6,7,7]))



// scores.forEach(function(num){
//     document.write(num+"<br>")
// })






// document.write(scores.indexOf(55))
// document.write(scores.lastIndexOf(45))


// const index = scores.findIndex(function(i){
//     return i<13
// })

// document.write(index)



// const index = scores.find(function(i){
//     return i===12
// })

// document.write(index)


// const check = scores.some(function(grades){
//     return grades <= 12
// })

// document.write(check)



// const check = scores.every(function(grades){
//     return grades < 12
// })

// document.write(check)




// document.write(scores.fill('@'))


// document.write(scores.includes(13))


// document.write(Array.isArray([]))



// document.write( scores.join('_'))


// let s = scores.entries();

// for(let i of s) {
//     console.table(i)
// }


 let name = "zeeshan"





// document.write(name.split('').reverse().join(''))





// let keys = scores.keys();
// for(let k of keys) {
//     console.table(k)
// }




// document.write(scores+"<br>")
// document.write(scores.pop()+"<br>")
// document.write(scores)



// document.write(scores+"<br>")
// document.write(scores.push(34,343,4,4)+"<br>")
// document.write(scores)





// document.write(scores+"<br>")
// document.write(scores.shift()+"<br>")
// document.write(scores)






// document.write(scores+"<br>")
// document.write(scores.unshift(10)+"<br>")
// document.write(scores)





// document.write(scores.slice(0,4))


// document.write(scores.splice(-1))
// document.write(scores)




// document.write(scores.sort())


// document.write(typeof scores.toString())



// let newGrades = scores.map(function(score) {
//     return score<60 && score>30 ? score+5 : score
// })

// console.log(newGrades)


// let newGrades = scores.filter(function(score) {
//     return score >60 && score<90
// })


// let sum = 0;

// for (let i = 0;i<scores.length;i++) {
//     sum+=scores[i]
// }

// console.log(sum)


// let newGrades = scores.reduce(function(score,sum) {
//     return score+sum
// }, 0)

// console.log(newGrades)






let person  = {
    first_name :"Muhammad",
    last_name :"Ali",
    age:23,
    address:"Address",
    fullName:function(){
        return this.first_name + " " + this.last_name
    }
}


// let person = new Object();

// delete person.age

//  person.name = "Ali"
//  person.age = 32
//  person.contact = "38974389"



// console.log(person['first_name'])
// console.log(person.first_name)
// console.log(person.last_name)

// alert(person)
// console.log(person.fullName())




// function Person(name,age) {
//         this.name = name
//         this.age = age
// }


// let p = new Person("Ali",3);
// let p2 = new Person("Usman",6);

// console.log(p2.age,p2.name)




// console.table(Object.entries(person))
// console.table(Object.keys(person))
// console.table(Object.values(person))

let person2 = {}

Object.assign(person2,person)

Object.freeze(person2)
person2.first_name = "Asad"

console.table(person)
console.table(person2)
