const form = document.querySelector("#form"),
    name = document.querySelector("#name"),
    email = document.querySelector("#email"),
    password = document.querySelector("#password"),
    cpassword = document.querySelector("#cpassword"),
    nameMsg = document.querySelector(".name"),
    emailMsg = document.querySelector(".email"),
    passwordMsg = document.querySelector(".password"),
    cpasswordMsg = document.querySelector(".cpassword")



name.addEventListener("input", function () {
    validateName(name)
})




email.addEventListener("input", function () {
    validateEmail(email)
})

password.addEventListener("input", function () {
    validatePassword(password)
})


cpassword.addEventListener("input", function () {
    validateConfirmPassword(cpassword)
})








form.addEventListener("submit", function (e) {
    e.preventDefault()
    if (validateName(name) && validateEmail(email) && validatePassword(password) && validateConfirmPassword(cpassword)) {
        // form.submit()
        let user = {
            name:name.value,
            email:email.value
        }
        console.log(user)
        document.getElementById("msg").style.display= "block";
        document.getElementById("msg").innerHTML = user.name +" Registered Successfully";
        setTimeout(() =>{
            form.reset()
            document.getElementById("msg").innerHTML = ""
            document.getElementById("msg").style.display= "none";
        },3000)

    }

})






function validateName(name) {
    if (!name.value || name.value === "") {
        name.classList.add("error")
        showMessage("Name field is required", nameMsg)
        
    } else if (name.value.length < 5) {
        name.classList.add("error")
        showMessage("Name must be at least 5 characters", nameMsg)
        
    }
    else {
        name.classList.remove("error")
        showMessage("", nameMsg)
        return true
    }
}


function validateEmail(email) {
    if (!email.value || email.value === "") {
        email.classList.add("error")
        showMessage("email field is required", emailMsg)
        

    } else if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
        email.classList.add("error")
        showMessage("email must be valid", emailMsg)
        

    }
    else {
        email.classList.remove("error")
        showMessage("", emailMsg)
        return true
    }
}


function validatePassword(password) {
    if (!password.value || password.value === "") {
        password.classList.add("error")
        showMessage("password field is required", passwordMsg)
        

    } else if (password.value.length < 6) {
        password.classList.add("error")
        showMessage("password must be at least six characters", passwordMsg)
        

    }
    else {
        password.classList.remove("error")
        showMessage("", passwordMsg)
        return true
    }
}


function validateConfirmPassword(cpassword) {
    if (!cpassword.value || cpassword.value === "") {
        cpassword.classList.add("error")
        showMessage("Confirm password field is required", cpasswordMsg)
        

    } else if (cpassword.value !== password.value) {
        cpassword.classList.add("error")
        showMessage("Password did not match", cpasswordMsg)
        

    }
    else {
        cpassword.classList.remove("error")
        showMessage("", cpasswordMsg)
        return true
    }
}





function showMessage(msg, messageBox) {
    if (msg !== "") {
        messageBox.classList.add("error")
        messageBox.innerHTML = msg
    } else {
        messageBox.classList.remove("error")
        messageBox.innerHTML = ""
    }
}
