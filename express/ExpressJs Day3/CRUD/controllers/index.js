let users = []




// Getting all users
exports.getUser = (req, res) => {
    res.status(200).json(users)
}






// ADD user

exports.addUser = (req, res) => {
    const { name, email, phone, address } = req.body

    if (!name || !email || !phone || !address) {
        return res.status(400).json({ message: "All fields required", status: false })
    }
    // req.body = {...req.body,id:1}

    const checkUserExists = users.filter(user => {
        return user.email === email
    })

    if (checkUserExists.length > 0) {
        return res.status(400).json({ message: "User Already exists", status: false })
    }

    req.body.id = users.length > 0 ? users[users.length - 1].id + 1 : 1
    users.push(req.body)

    res.json({ message: "User Added successfully", status: true })
}






// Update User

exports.updateUser = (req, res) => {
    const { name, email, phone, address } = req.body


    const checkUserExists = users.filter(user => {
        return user.id === +req.params.userId
    })


    if (checkUserExists.length === 0) {
        return res.status(400).json({ message: "User not found", status: false })
    }


    if (!name || !email || !phone || !address) {
        return res.status(400).json({ message: "All fields required", status: false })
    }


    users = users.map(function (user) {
        if (user.id === +req.params.userId) {
            user.name = name
            user.email = email
            user.phone = phone
            user.address = address
        }
        return user
    })


    res.json({ message: "User Updated successfully", status: true })
}





// Delete User
exports.deleteUser = (req, res) => {


    const checkUserExists = users.filter(user => {
        return user.id === +req.params.userId
    })


    if (checkUserExists.length === 0) {
        return res.status(400).json({ message: "User not found", status: false })
    }

    users = users.filter(user => {
        return user.id !== +req.params.userId
    })


    return res.json({ message: "User Deleted successfully", status: true })

}
