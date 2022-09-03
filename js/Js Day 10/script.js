

// console.log(location)
// console.log(location.host)
// console.log(location.hostname)
// console.log(location.protocol)
const map = document.getElementById('map');

function func() {
    // location.assign('https://www.w3schools.com/')
    // window.location.reload()
    // window.location.replace('https://www.w3schools.com/')
    // window.location.href = "https://www.w3schools.com/"
    // window.history.forward()
    // window.history.back()
    // window.history.go(window.history.length-1)
    // console.log(window.history)

    // localStorage.setItem("name","Zeeshan")
    // localStorage.setItem("age","22")

    // console.log(localStorage.getItem("name"))
    // console.log(localStorage.length)
    // console.log(localStorage.key(1))
    // console.log(localStorage.clear())

    // const person = {
    //    ages: [3,4,54,6,6,3,6,7,3]
    // }
    // localStorage.setItem("person", JSON.stringify(person))

    // console.log(JSON.parse(localStorage.getItem("person")).ages)




    //    sessionStorage.setItem("name","Zeeshan")
    //     sessionStorage.setItem("age","22")

    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function (position) {
    //         console.log(position.coords.latitude)
    //         console.log(position.coords.longitude)
    //         map.innerHTML =`<iframe src='https://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}&hl=es;z=14&amp;output=embed' width="100%" height="500" ></iframe>`;

    //     })
    // } else {
    //     console.log("geolocation is not available")
    // }



}




const arr = [3, 5, 6, 4, 6, 7, 2, 3, 6]
const unique = new Set(arr)
// console.log(unique.values())

// console.log(unique.add(454))
// console.log(unique.delete(454))
// console.log(unique.has(23))


const data = new Map([
    ["age", 22],
    ["name", "Ali"]
])

// console.log(data.get("age"))
// console.log(data.get("name"))
// data.set("phone","3784893")
// console.log(data.delete("name"))

// console.log(data.entries())

// data.forEach(user=>{
//     console.log(user)
// })








class Car{
    name
    #age

    #password = 1232
    constructor(name,age){
        this.name = name
        this.#age = age
        // console.log(this.name)
    }

    getName(){
        return this.name
    }
    
    getAge(){
        if(this.#password===123){
            return this.#age
        }else{
            console.log("You are not logged in")
        }
    }

    setAge(age){
    
        this.#age = age 
    }
}

class Car2 extends Car{
    constructor(name,age,phone){
        super(name,age)
        this.phone = phone
    }
}


const car1 = new Car("Zeeshan",23);
const car = new Car("Ahmad",22);

// car2.setAge(20)


    // car2.name = "Arham"
// console.log(car2.getAge())
// console.log(car2.name)


const car2 = new Car2("Ali",21,"894734398")

// console.log(car2.age)