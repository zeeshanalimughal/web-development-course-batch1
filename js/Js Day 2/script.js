// var num = 10
// num++
// num--
// num--
// num--
// num--
// num--
// num+=2

// var newNum = num===10 ? ++num : --num

// console.log(newNum)


// if(today==="wednesday"){
//     if(time===2){
//         console.log("")
//     }
// }

// switch ("wednesday") {
//     case "wednesday": {
//         document.write('today is wednesday')
//         switch(4){
//             case 1:{
//                 console.log("it's 1pm")
//                 break
//             }
//             case 2:{
//                 console.log("it's 2pm")
//                 break
//             }
//             default:{
//                 console.log("not found")
//             }
//         }
//         break
//     }

//     case "thursday": {
//         document.write('today is thursday')
//         break
//     }
//     default: {
//         document.write('no match')
//     }
// }





// window.alert(2+3)
// var name = prompt("Please enter you name")
// var name = confirm("Do you want to delete ?")

// // document.write(typeof name)

//     if(name==="true") {
//         document.write('Deleted Successfully')
//     }else{
//         document.write('Deleted Failure')
//     }


// var list = "<ul style='color:red'>";
// // console.log(list)

// for (let i = 1; i <= 10; i += 1) {
//     list = list + "<li>Number is" + i + "</li>"
//     // console.log(list)
// }
// list += "</ul>"
// // console.log(list)
// document.write(list)

// let i = 1
// var j = 1
// var table = "<table border='1'>"
// while (i <= 10) {
//     table += "<tr>"
//     while (j <= 10) {
//         if(j==10){
//             table += "<td>" + j*3 + "</td>"
//         }
//         table += "<td>" + j + "</td>"
//         j++
//     }
//     j=1
//     table += "</tr>"
//     i++
// }
// table += "</table>"
// document.write(table)

var i = 1

// do{
// document.write(i)
// i++
// if(i===5){
//     // break;
//     continue;
// }
// }
// while(i<10)


/* for(i;i<10; i++){
     if(i===5){
         continue;
     }else{
         document.write(i)
     }
 } */

let tableNo = prompt('Enter table No')
var table = "<table border='1' style='border-collapse: collapse;width:100%;text-align:center'>"

for (i = 1; i <= 10; i++) {
    table += "<tr>"
    table += "<td>" + tableNo + "</td>"
    table += "<td>*</td>"
    table += "<td>" + i + "</td>"
    table += "<td>=</td>"
    table += "<td>" + tableNo * i + "</td>"
    table += "</tr>"
}

document.write(table)


