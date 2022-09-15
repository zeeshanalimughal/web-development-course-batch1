const crypto = require('crypto')


// console.log(crypto.getCiphers())
// console.log(crypto.getHashes())
// console.log(crypto.randomUUID())




// console.log(crypto.createHmac("sha256","123",'hex').update("H").digest('hex'))




// console.log(crypto.randomBytes(1,function(err,bytes){
//     console.log(bytes.toString('hex'));
// }))




// console.log(crypto.randomFill(new Buffer.alloc(120),function(err,bytes){
//     console.log(bytes.toString('hex'));
// }))


// console.log(crypto.scrypt("my password","asd",1,function(err,pass){
//     console.log(pass.toString('hex'));
// }))




const key = crypto.scryptSync("my password","asd",24)

const iv = new Buffer.alloc(16,0)

// const cipher = crypto.createCipheriv('aes-192-cbc',key,iv)


// let encrypted = cipher.update("my contentmy contentmy contentmy contentmy content",'utf-8','hex')

// encrypted= encrypted + cipher.final('hex')

// console.log(encrypted)


const encText = "fe1da94161a8c8763273a25023b35fbd00df185e2d00c2b6e74d05777b23c99ae8c03873269d1861a5967d70e03b10e8d82ea6aee961d892ddfb95e81c3659c3"


const decipher = crypto.createDecipheriv('aes-192-cbc', key, iv)


let decrypted = decipher.update(encText,'hex','utf-8')

decrypted+=decipher.final('utf-8')

console.log(decrypted)