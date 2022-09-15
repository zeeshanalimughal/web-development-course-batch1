const fs = require("fs")
const http = require("http")
const path = require("path")
const url = require('url');
const querystring = require('querystring')








// Create File and Directory
try {
    if (!fs.existsSync("users")) {
        fs.mkdirSync("users")
    }
} catch (err) {
    console.error(err.message)
    process.exit(1)
}

// Create users.json  file and Write initial empty array [] inside json file
try {
    if (!fs.existsSync("users/users.json")) {
        fs.writeFile("users/users.json", "[]", function (err) {
            if (err) throw new Error(err.message)
            else console.log("File created")
        })
    }
} catch (err) {
    console.log("Error: " + err.message)
    process.exit(1)
}






// Create Server
const server = http.createServer(function (req, res) {

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });



    // Get All Users From File
    if (req.url === "/users") {
        fs.readFile(path.join(__dirname, '/users/users.json'), 'utf-8', function (err, data) {
            if (err) return console.log(err.message);
            res.write(data);
            res.end()
        })
    }




    // Add user
    if (req.url === "/add") {
        // First we read the file data
        fs.readFile(__dirname + '/users/users.json', 'utf-8', function (err, data) {
            if (err) return console.log(err.message)
            let users = JSON.parse(data)

            const newUser = {
                // check if one or more users exist then increment this user id with the last user id else initialize with id 1.
            id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
                name: "Ahmad",
                email: "kashif1@gmail.com",
                age: "24",
                phone: "123234234",
                Address: "Sadiq Abad"
            }

            //Check if user email is already exists or not
            const checkUserAlreadyExists = users.some(function (user) {
                return user.email === newUser.email
            })
            if (!checkUserAlreadyExists) {
                
                // Adding new user to users array
                users =  [...users,newUser]

                // Again writing updaing users list to users.json file after convert it into json string

                fs.writeFile(path.join(__dirname, 'users', 'users.json'), JSON.stringify(users), function (err) {
                    if (err) return console.log(err.message)
                    res.write(JSON.stringify("user added successfully"))
                    res.end()
                })
            } else {
                res.write(JSON.stringify("user already exists"))
                res.end()
            }
        })

    }







    // Getting single User data

    // Checking if path name is fine like /getuser and the query paramester is not null
    if (url.parse(req.url).pathname === "/getuser" && url.parse(req.url).query !== null) {

        // Getting id from url
    const { id: userId } = querystring.parse(url.parse(req.url).query);


        // Read users file again and filter the user by its id

        fs.readFile(path.join(__dirname, 'users', "users.json"), 'utf8', function (err, data) {
            if (err) return console.log(err.message)

            // convert json to array
            const users = JSON.parse(data)
            const filteredUser = users.filter(function (user) {
                return user.id === +userId
            })

            // Check if user found or not
            if (filteredUser.length > 0) {
                res.write(JSON.stringify(filteredUser))
            } else {
                res.write(JSON.stringify("User not found"))
            }
            res.end()
        })
    }











    // Deleting single User based on it's id

    if (url.parse(req.url).pathname === "/delete" && url.parse(req.url).query !== null) {

        // Getting id from url
        const userId = +querystring.parse(url.parse(req.url).query).id;


        // Read users file again and filter the user by its id

        fs.readFile(path.join(__dirname, 'users', "users.json"), 'utf8', function (err, data) {
            if (err) return console.log(err.message)

            //first convert users json string to array
            const users = JSON.parse(data)

            // filtering users but not the user with id of user that you want to delete
            const filteredUsers = users.filter(function (user) {
                return user.id !== userId
            })





            // Again writing updated users list to users.json file

            // Checking if filteredUsers length is less than the previous users length
            if (filteredUsers.length < users.length) {
                fs.writeFile(path.join(__dirname, 'users', 'users.json'), JSON.stringify(filteredUsers), function (err) {
                    if (err) return console.log(err.message)

                    res.write(JSON.stringify("user deleted successfully"))
                    res.end()
                })
            } else {
                res.write(JSON.stringify("User not found"))
                res.end()
            }
        })
    }



    if (req.url === "/") {
        res.writeHead(200, "Content-Type", "text/html");
        res.write('<h1>Hello World</h1>')
        res.end()
    }
})


server.listen(4000, function () {
    console.log("Server listening on http://localhost:4000")
})